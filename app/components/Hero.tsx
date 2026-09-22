export default function Hero() {
  return (
    <section style={{ padding: "calc(96px*var(--d)) var(--pad-x) calc(84px*var(--d))", maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 36,
        }}
      >
        Automation + Data Systems · Melbourne
      </div>

      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(42px, 11vw, 84px)",
          lineHeight: 1.02,
          fontWeight: 400,
          margin: "0 0 38px",
          letterSpacing: "-.02em",
          maxWidth: 1040,
          textWrap: "balance",
        }}
      >
        I don&apos;t just analyse data. I build{" "}
        <span style={{ fontStyle: "italic", color: "var(--accent)" }}>systems</span> that act on it.
      </h1>

      <p style={{ fontSize: 19, lineHeight: 1.6, color: "#444a56", maxWidth: 620, margin: "0 0 42px" }}>
        MS Data Science · AWS Certified Data Engineer. Currently automating warehouse operations at Ozcare
        Organics. Three-plus years building production data systems for Mondelez, Nestlé, L&apos;Oréal and Asahi,
        from raw ingestion to the decisions they drive.
      </p>

      <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
        <a
          href="#contact"
          style={{ background: "#15181f", color: "#f2f3f6", fontSize: 15, fontWeight: 600, padding: "15px 32px", borderRadius: 2, textDecoration: "none" }}
        >
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          style={{ fontSize: 15, fontWeight: 600, color: "#15181f", borderBottom: "1.5px solid #15181f", paddingBottom: 3, textDecoration: "none" }}
        >
          Download Resume
        </a>
        <span style={{ fontSize: 13.5, color: "#7d8695", marginLeft: 6 }}>Full work rights · 485 visa (valid Feb 2028)</span>
      </div>
    </section>
  );
}
