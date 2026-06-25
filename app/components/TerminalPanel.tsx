"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const GREEN = "#27c93f";

type OutLine = { sym: string; symColor: string; text: string };
type Block = { cmd: string; out: OutLine[] };

const BLOCKS: Block[] = [
  {
    cmd: "python pipeline.py --raw data/",
    out: [{ sym: "✓", symColor: GREEN, text: "15,000 records · gates passed" }],
  },
  {
    cmd: "dbt run --select marts",
    out: [{ sym: "✓", symColor: GREEN, text: "24 models built · 0 errors" }],
  },
  {
    cmd: "python decide.py --notify",
    out: [{ sym: "→", symColor: "var(--code-fn)", text: "action shipped, not a chart" }],
  },
];

// timing (ms)
const CHAR = 30;
const AFTER_CMD = 380; // pause once a command finishes typing
const PER_LINE = 320; // gap between output lines
const BETWEEN = 600; // gap before the next command
const HOLD = 1800; // hold the full session before looping

function dot(bg: string) {
  return <span style={{ width: 11, height: 11, borderRadius: "50%", background: bg, display: "inline-block" }} />;
}

function Caret({ blink }: { blink: boolean }) {
  return (
    <span
      className={blink ? "term-caret" : undefined}
      style={{
        display: "inline-block",
        width: 8,
        height: "1.05em",
        marginLeft: 2,
        background: "var(--code-base)",
        verticalAlign: "text-bottom",
        opacity: blink ? undefined : 1,
      }}
    />
  );
}

const cmdLine: React.CSSProperties = { whiteSpace: "nowrap", overflow: "hidden" };

function CommandLine({ cmd }: { cmd: React.ReactNode }) {
  return (
    <div style={cmdLine}>
      <span style={{ color: GREEN }}>$</span> {cmd}
    </div>
  );
}

function OutputLine({ line }: { line: OutLine }) {
  return (
    <div>
      <span style={{ color: line.symColor }}>{line.sym}</span> {line.text}
    </div>
  );
}

export default function TerminalPanel() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  // start state: empty (matches SSR → no hydration mismatch)
  const [bi, setBi] = useState(0); // current block index (=== BLOCKS.length means session done)
  const [typed, setTyped] = useState("");
  const [outShown, setOutShown] = useState(0);

  // reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // visibility gate
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // driver
  useEffect(() => {
    const clear = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    const at = (delay: number, fn: () => void) => {
      timers.current.push(setTimeout(fn, delay));
    };

    if (reduced) {
      clear();
      setBi(BLOCKS.length);
      setTyped("");
      setOutShown(0);
      return;
    }
    if (!inView) {
      clear();
      setBi(0);
      setTyped("");
      setOutShown(0);
      return;
    }

    const run = () => {
      setBi(0);
      setTyped("");
      setOutShown(0);
      let t = 0;

      BLOCKS.forEach((block, index) => {
        // switch to this block (reset typed/output)
        at(t, () => {
          setBi(index);
          setTyped("");
          setOutShown(0);
        });
        // type the command
        for (let i = 1; i <= block.cmd.length; i++) {
          t += CHAR;
          const text = block.cmd.slice(0, i);
          at(t, () => setTyped(text));
        }
        // pause, then stream output lines
        t += AFTER_CMD;
        block.out.forEach((_, oi) => {
          at(t, () => setOutShown(oi + 1));
          t += PER_LINE;
        });
        t += BETWEEN;
      });

      // trailing prompt, hold, then loop
      at(t, () => {
        setBi(BLOCKS.length);
        setTyped("");
        setOutShown(0);
      });
      t += HOLD;
      at(t, run);
    };

    run();
    return clear;
  }, [inView, reduced]);

  return (
    <div
      ref={rootRef}
      style={{
        border: "1px solid var(--code-border)",
        borderRadius: 8,
        overflow: "hidden",
        background: "var(--code-bg)",
        boxShadow: "0 24px 60px rgba(26,23,18,.16)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 18px", borderBottom: "1px solid var(--code-titlebar)" }}>
        {dot("#ff5f56")}
        {dot("#ffbd2e")}
        {dot(GREEN)}
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--code-filename)", marginLeft: 10 }}>
          ~/pipeline · zsh
        </span>
      </div>

      <div
        style={{
          padding: 24,
          fontFamily: "var(--font-mono)",
          fontSize: 13.5,
          lineHeight: 2.0,
          color: "var(--code-base)",
          minHeight: 240,
        }}
      >
        {BLOCKS.map((block, i) => {
          if (i < bi) {
            // completed block
            return (
              <Fragment key={i}>
                <CommandLine cmd={block.cmd} />
                {block.out.map((l, j) => (
                  <OutputLine key={j} line={l} />
                ))}
              </Fragment>
            );
          }
          if (i === bi) {
            // active block
            const cmdDone = typed.length === block.cmd.length;
            return (
              <Fragment key={i}>
                <CommandLine
                  cmd={
                    <>
                      {typed}
                      {outShown === 0 && <Caret blink={cmdDone} />}
                    </>
                  }
                />
                {block.out.slice(0, outShown).map((l, j) => (
                  <OutputLine key={j} line={l} />
                ))}
              </Fragment>
            );
          }
          return null;
        })}

        {/* trailing prompt once the whole session is done */}
        {bi >= BLOCKS.length && (
          <CommandLine cmd={<Caret blink />} />
        )}
      </div>
    </div>
  );
}
