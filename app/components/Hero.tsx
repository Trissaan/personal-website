export default function Hero() {
  return (
    <section style={{ padding: "calc(96px*var(--d)) 56px calc(84px*var(--d))", maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 36,
        }}
      >
        <span style={{ width: 38, height: 1, background: "var(--accent)", display: "inline-block" }} />
        Data + AI Systems · Melbourne
      </div>

      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 84,
          lineHeight: 1.0,
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

      <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4a443a", maxWidth: 620, margin: "0 0 42px" }}>
        MS Data Science · AWS Certified Data Engineer. Two-plus years building production data systems for Mondelez,
        Nestlé, L&apos;Oréal and Asahi, from raw ingestion to the decisions they drive.
      </p>

      <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
        <a
          href="#contact"
          style={{ background: "#1a1712", color: "#f5f2ea", fontSize: 15, fontWeight: 600, padding: "15px 32px", borderRadius: 2, textDecoration: "none" }}
        >
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          style={{ fontSize: 15, fontWeight: 600, color: "#1a1712", borderBottom: "1.5px solid #1a1712", paddingBottom: 3, textDecoration: "none" }}
        >
          Download Resume
        </a>
        <span style={{ fontSize: 13.5, color: "#8a8170", marginLeft: 6 }}>Full work rights · 485 visa (valid Feb 2028)</span>
      </div>
    </section>
  );
}
