export default function Contact() {
  return (
    <section id="contact" style={{ padding: "calc(110px*var(--d)) 56px", maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 68,
          lineHeight: 1.02,
          fontWeight: 400,
          margin: "0 0 26px",
          letterSpacing: "-.015em",
          textWrap: "balance",
        }}
      >
        Let&apos;s build something <span style={{ fontStyle: "italic", color: "var(--accent)" }}>that actually works.</span>
      </h2>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#5c554a", maxWidth: 560, margin: "0 auto 36px" }}>
        Looking for roles in data engineering, AI systems and analytics. Melbourne-based, open to relocation, full
        Australian work rights.
      </p>
      <div style={{ display: "flex", gap: 18, alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
        <a
          href="mailto:trissaan@gmail.com"
          style={{ background: "#1a1712", color: "#f5f2ea", fontSize: 15, fontWeight: 600, padding: "16px 34px", borderRadius: 2, textDecoration: "none" }}
        >
          trissaan@gmail.com
        </a>
        <a
          href="/resume.pdf"
          style={{ fontSize: 15, fontWeight: 600, color: "#1a1712", borderBottom: "1.5px solid #1a1712", paddingBottom: 3, textDecoration: "none" }}
        >
          Download Resume
        </a>
      </div>
      <div style={{ display: "flex", gap: 26, justifyContent: "center", fontSize: 13.5, fontWeight: 500, color: "#8a8170" }}>
        <a href="https://github.com/trissaan" style={{ color: "inherit", textDecoration: "none" }}>GitHub</a>
        <a href="https://linkedin.com/in/trissaan" style={{ color: "inherit", textDecoration: "none" }}>LinkedIn</a>
        <a href="mailto:trissaan@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>Email</a>
      </div>
    </section>
  );
}
