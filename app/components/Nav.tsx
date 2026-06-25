"use client";

import { useEffect, useState } from "react";

const links = ["What I Do", "Projects", "Impact", "Engineering", "Contact"];
const toId = (l: string) => l.toLowerCase().replace(/\s+/g, "-");

export default function Nav() {
  const [active, setActive] = useState<string>("");

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
      // Collapse the root to a thin band at ~45% from the top so the
      // section crossing that line is the "current" one.
      { rootMargin: "-45% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 56px",
        background: "rgba(245,242,234,.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(26,23,18,.1)",
      }}
    >
      <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500, letterSpacing: "-.01em" }}>
        Trissaan A.
      </div>
      <div style={{ display: "flex", gap: 34, fontSize: 13.5, fontWeight: 500, letterSpacing: ".01em", color: "#5c554a" }}>
        {links.map((l) => {
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
        })}
      </div>
      <a
        href="#contact"
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
    </nav>
  );
}
