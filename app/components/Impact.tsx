const stats = [
  { big: "15k+", label: "Daily Records", body: "SQL + Python pipelines with automated validation gates." },
  { big: "C-suite", label: "Power BI Dashboards", body: "DAX KPI measures across financial, logistics & client performance." },
  { big: "→0", label: "Manual Handoffs", body: "Replaced Excel workflows with Python + SQL + Power Automate." },
  { big: "100%", label: "Quality Gates", body: "Anomaly detection, drift monitoring & systematic reconciliation." },
];

export default function Impact() {
  return (
    <section id="impact" style={{ background: "#ece7db", borderTop: "1px solid rgba(26,23,18,.12)" }}>
      <div style={{ padding: "calc(84px*var(--d)) 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 46, lineHeight: 1.05, fontWeight: 400, margin: 0, letterSpacing: "-.01em", maxWidth: 560 }}>
            From 15,000+ records to <span style={{ fontStyle: "italic", color: "var(--accent)" }}>real decisions.</span>
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#5c554a", maxWidth: 380, margin: 0 }}>
            Partnered with operations, finance and C-suite to translate requirements into data products that get used.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, borderTop: "1px solid rgba(26,23,18,.18)" }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: i === 0 ? "28px 28px 28px 0" : i === stats.length - 1 ? "28px 0 28px 28px" : "28px 28px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(26,23,18,.12)" : "none",
              }}
            >
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 40, fontWeight: 500, marginBottom: 10 }}>{s.big}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{s.label}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "#5c554a", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
