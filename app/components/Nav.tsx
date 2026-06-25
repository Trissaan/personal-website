"use client";

import { useEffect, useState } from "react";

const links = ["What I Do", "Projects", "Impact", "Engineering", "Contact"];
const toId = (l: string) => l.toLowerCase().replace(/\s+/g, "-");

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = links.map(toId);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const desktopLink = (l: string) => {
    const id = toId(l);
    const isActive = active === id;
    return (
      <a
        key={l}
        href={`#${id}`}
        aria-current={isActive ? "true" : undefined}
        style={{
          position: "relative",
          color: isActive ? "var(--accent)" : "inherit",
          textDecoration: "none",
          transition: "color .2s ease",
        }}
      >
        {l}
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -5,
            height: 1.5,
            background: "var(--accent)",
            transformOrigin: "left center",
            transform: `scaleX(${isActive ? 1 : 0})`,
            transition: "transform .25s ease",
          }}
        />
      </a>
    );
  };

  const mobileLink = (l: string) => {
    const id = toId(l);
    const isActive = active === id;
    return (
      <a
        key={l}
        href={`#${id}`}
        aria-current={isActive ? "true" : undefined}
        onClick={() => setOpen(false)}
        style={{
          display: "block",
          padding: "13px 0",
          fontSize: 16,
          fontWeight: 500,
          color: isActive ? "var(--accent)" : "#1a1712",
          textDecoration: "none",
          borderBottom: "1px solid rgba(26,23,18,.07)",
        }}
      >
        {l}
      </a>
    );
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "22px var(--pad-x)",
        background: "rgba(245,242,234,.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(26,23,18,.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500, letterSpacing: "-.01em" }}>
          Trissaan A.
        </div>

        <div
          className="nav-links"
          style={{ gap: 34, fontSize: 13.5, fontWeight: 500, letterSpacing: ".01em", color: "#5c554a" }}
        >
          {links.map(desktopLink)}
        </div>

        <a
          href="#contact"
          className="nav-cta"
          style={{
            fontSize: 13,
            fontWeight: 600,
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            padding: "9px 18px",
            borderRadius: 2,
            textDecoration: "none",
          }}
        >
          Let&apos;s Talk
        </a>

        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            padding: 6,
            margin: 0,
            cursor: "pointer",
            color: "#1a1712",
            lineHeight: 0,
            alignItems: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="nav-dropdown" style={{ flexDirection: "column", marginTop: 14, paddingTop: 4 }}>
          {links.map(mobileLink)}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 16,
              alignSelf: "flex-start",
              fontSize: 14,
              fontWeight: 600,
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              padding: "10px 20px",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
