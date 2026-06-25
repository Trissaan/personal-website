const stack = ["Python", "SQL", "PySpark", "Power BI", "AWS", "FastAPI", "PostgreSQL", "LLM APIs", "Databricks"];

function CodePanel() {
  const dot = (bg: string) => (
    <span style={{ width: 11, height: 11, borderRadius: "50%", background: bg, display: "inline-block" }} />
  );
  const comment = { color: "var(--code-comment)" } as const;
  return (
    <div
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
        {dot("#27c93f")}
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--code-filename)", marginLeft: 10 }}>
          pipeline.py · production
        </span>
      </div>
      <div style={{ padding: 24, fontFamily: "var(--font-mono)", fontSize: 13.5, lineHeight: 2.0, color: "var(--code-base)" }}>
        <div>
          <span style={{ color: "var(--code-kw)" }}>def</span> <span style={{ color: "var(--code-fn)" }}>run</span>(raw):
        </div>
        <div style={{ paddingLeft: 24 }}>df = ingest(raw)<span style={comment}>  # 15,000+ daily records</span></div>
        <div style={{ paddingLeft: 24 }}>df = validate(df)<span style={comment}>  # quality gates</span></div>
        <div style={{ paddingLeft: 24 }}>df = transform(df)<span style={comment}>  # pyspark · sql</span></div>
        <div style={{ paddingLeft: 24 }}>
          <span style={{ color: "var(--code-kw)" }}>return</span> decide(df)<span style={comment}>  # → action, not a chart</span>
        </div>
      </div>
    </div>
  );
}

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
        <CodePanel />
      </div>
    </section>
  );
}
