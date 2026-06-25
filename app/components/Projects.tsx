import Link from "next/link";

const projects = [
  {
    tag: "Featured · LLM Agent",
    tagColor: "var(--accent)",
    title: "Email Insights Agent",
    body: "AI inbox analysis over WhatsApp/SMS. Ask in natural language. Claude uses tool-use reasoning to search Gmail, summarise threads, and surface what matters.",
    stack: ["Python", "Claude API", "Gmail API", "Twilio"],
    href: "/projects/email-insights-agent",
  },
  {
    tag: "Enterprise",
    tagColor: "#8a8170",
    title: "Enterprise Data Platform",
    body: "End-to-end reporting for Mondelez, Nestlé, L'Oréal. 15,000+ daily records, automated Power BI dashboards across the business.",
    stack: ["Python", "SQL", "Power BI", "Power Automate"],
    href: "/projects/enterprise-operations-data-platform",
  },
  {
    tag: "ML",
    tagColor: "#8a8170",
    title: "Speech Emotion Recognition",
    body: "CNN-based audio classification detecting emotions from speech patterns, with a real-time inference pipeline.",
    stack: ["Python", "TensorFlow", "Librosa", "CNN"],
    href: "/projects/speech-emotion-recognition",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ borderTop: "1px solid rgba(26,23,18,.12)", padding: "calc(80px*var(--d)) var(--pad-x)", maxWidth: 1280, margin: "0 auto" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 44 }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px, 6vw, 46px)", fontWeight: 400, margin: 0, letterSpacing: "-.01em" }}>
          Things I&apos;ve <span style={{ fontStyle: "italic" }}>built.</span>
        </h2>
        <a href="https://github.com/trissaan" style={{ fontSize: 14, fontWeight: 600, color: "#5c554a", textDecoration: "none" }}>
          More on GitHub →
        </a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: 24 }}>
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            style={{
              background: "#fff",
              border: "1px solid rgba(26,23,18,.12)",
              borderRadius: 4,
              padding: "32px 30px",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: p.tagColor, marginBottom: 18 }}>
              {p.tag}
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontWeight: 500, margin: "0 0 12px", lineHeight: 1.15 }}>
              {p.title}
            </h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#4a443a", margin: "0 0 24px", flex: 1 }}>{p.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.stack.map((s) => (
                <span key={s} style={{ fontSize: 11.5, padding: "5px 11px", border: "1px solid rgba(26,23,18,.18)", borderRadius: 100, color: "#5c554a" }}>
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
