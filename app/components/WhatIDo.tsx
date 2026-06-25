import TerminalPanel from "@/app/components/TerminalPanel";

const stack = ["Python", "SQL", "PySpark", "Power BI", "AWS", "FastAPI", "PostgreSQL", "LLM APIs", "Databricks"];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      style={{ borderTop: "1px solid rgba(26,23,18,.12)", padding: "calc(80px*var(--d)) 56px", maxWidth: 1280, margin: "0 auto" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 22 }}>
            What I Do
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 46, lineHeight: 1.06, fontWeight: 400, margin: "0 0 22px", letterSpacing: "-.01em" }}>
            Data → Insight → <span style={{ fontStyle: "italic" }}>Action.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "#4a443a", margin: "0 0 28px", maxWidth: 480 }}>
            SQL pipelines. Python automation. LLM-powered agents. Power BI dashboards. I build the full stack from raw
            data to business decisions. Visualisation is the garnish, the work is upstream.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, maxWidth: 480 }}>
            {stack.map((s) => (
              <span key={s} style={{ fontSize: 12.5, padding: "7px 14px", border: "1px solid rgba(26,23,18,.2)", borderRadius: 100 }}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <TerminalPanel />
      </div>
    </section>
  );
}
