export default function Thesis() {
  return (
    <section style={{ background: "#1a1712", color: "#f5f2ea", borderTop: "1px solid rgba(26,23,18,.12)" }}>
      <div style={{ padding: "calc(110px*var(--d)) 56px", maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 34 }}>
          Thesis
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 72,
            lineHeight: 1.04,
            fontWeight: 400,
            margin: "0 auto 32px",
            maxWidth: 900,
            letterSpacing: "-.01em",
            textWrap: "balance",
          }}
        >
          Dashboards don&apos;t matter.{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>Decisions do.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#cabfa9", maxWidth: 600, margin: "0 auto" }}>
          Every pipeline I ship exists to shorten the distance between a number and an action. Visualisation is the
          garnish. The work is upstream.
        </p>
      </div>
    </section>
  );
}
