const roles = [
  {
    period: "01 · Apr 2024–Mar 2026",
    title: "Data Scientist & Analytics Engineer",
    org: "Packcentre Marketing Services",
    body: "Owned the full lifecycle of reporting systems, from schema design through deployment. 15,000+ daily records, SQL/Python pipelines and Power BI dashboards used by operations, finance and C-suite for enterprise clients (~$2M Mondelez, Nestlé, L'Oréal).",
    credentials: null as string[] | null,
  },
  {
    period: "02 · May 2022–Feb 2023",
    title: "Project Engineer · Data & Automation",
    org: "Wipro",
    body: "Enterprise data migration to AWS. SQL extraction & validation, dataset reconciliation at scale. Built the validation workflows that caught errors before they reached downstream systems.",
    credentials: ["MS Data Science · Deakin", "AWS Certified Data Engineer"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ borderTop: "1px solid rgba(26,23,18,.12)", padding: "calc(80px*var(--d)) var(--pad-x)", maxWidth: 1280, margin: "0 auto" }}
    >
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 40 }}>
        Experience
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "var(--split-even)", gap: 0 }}>
        {roles.map((r, i) => (
          <div
            key={r.title}
            style={
              i === 0
                ? { paddingRight: "var(--cell-indent)" }
                : { paddingLeft: "var(--cell-indent)", borderLeft: "var(--rule-v)" }
            }
          >
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "var(--accent)", marginBottom: 12, letterSpacing: ".04em" }}>
              {r.period}
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 500, margin: "0 0 6px", lineHeight: 1.12 }}>
              {r.title}
            </h3>
            <div style={{ fontSize: 14, color: "#8a8170", marginBottom: 18 }}>{r.org}</div>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#4a443a", margin: 0 }}>{r.body}</p>
            {r.credentials && (
              <div style={{ marginTop: 24, display: "flex", gap: 20, fontSize: 13.5, color: "#5c554a" }}>
                <span>{r.credentials[0]}</span>
                <span style={{ color: "#cabfa9" }}>·</span>
                <span>{r.credentials[1]}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
