const principles = [
  {
    n: "01",
    t: "Idempotent by design",
    d: "Pipelines re-run safely. Same input, same output. No duplicate records, no manual cleanup after a failed job.",
  },
  {
    n: "02",
    t: "Validate at the boundary",
    d: "Quality gates sit between every stage. Bad data fails loudly and early, before it ever reaches a dashboard or a decision.",
  },
  {
    n: "03",
    t: "Observable in production",
    d: "Drift monitoring, anomaly detection and systematic reconciliation run continuously, not bolted on after something breaks.",
  },
  {
    n: "04",
    t: "Automate the handoff",
    d: "Every manual Excel step is a bug waiting to happen. SQL, Python and Power Automate replace the copy-paste entirely.",
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      style={{ borderTop: "1px solid rgba(26,23,18,.12)", padding: "calc(84px*var(--d)) 56px", maxWidth: 1280, margin: "0 auto" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, marginBottom: 52, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 22 }}>
            Engineering
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 46, lineHeight: 1.06, fontWeight: 400, margin: 0, letterSpacing: "-.01em", maxWidth: 540 }}>
            How I <span style={{ fontStyle: "italic" }}>build.</span>
          </h2>
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#5c554a", maxWidth: 380, margin: 0 }}>
          A dashboard is only as trustworthy as the pipeline behind it. These are the rules the upstream work runs on.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0, borderTop: "1px solid rgba(26,23,18,.18)" }}>
        {principles.map((p, i) => (
          <div
            key={p.n}
            style={{
              padding: "36px 0",
              paddingRight: i % 2 === 0 ? 56 : 0,
              paddingLeft: i % 2 === 1 ? 56 : 0,
              borderRight: i % 2 === 0 ? "1px solid rgba(26,23,18,.12)" : "none",
              borderBottom: i < 2 ? "1px solid rgba(26,23,18,.12)" : "none",
            }}
          >
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 30, color: "var(--accent)", marginBottom: 14 }}>{p.n}</div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 500, margin: "0 0 10px", lineHeight: 1.15 }}>
              {p.t}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.62, color: "#4a443a", margin: 0, maxWidth: 460 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
