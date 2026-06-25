import Link from "next/link";

const steps = [
  { n: "01", t: "Scrape", d: "Seek job board, continuously" },
  { n: "02", t: "Tailor", d: "GPT resume & cover letter" },
  { n: "03", t: "Authenticate", d: "AWS Cognito · JWT" },
  { n: "04", t: "Track", d: "Live progress dashboard" },
];

export default function FeaturedProject() {
  return (
    <section
      style={{ borderTop: "1px solid rgba(26,23,18,.12)", padding: "calc(88px*var(--d)) 56px", maxWidth: 1280, margin: "0 auto" }}
    >
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>
        Featured Project
      </div>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 58,
          lineHeight: 1.02,
          fontWeight: 400,
          margin: "0 0 24px",
          maxWidth: 880,
          letterSpacing: "-.015em",
          textWrap: "balance",
        }}
      >
        I built an AI that <span style={{ fontStyle: "italic" }}>applies to jobs</span> for me.
      </h2>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4a443a", maxWidth: 680, margin: "0 0 44px" }}>
        Playwright scrapes Seek listings, GPT tailors my resume & cover letter per job, then a live dashboard tracks
        every application. Background schedulers monitor new listings continuously, with no manual applications. FastAPI +
        MongoDB backend, Next.js frontend, AWS Cognito auth.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 0,
          borderTop: "1px solid rgba(26,23,18,.18)",
          borderBottom: "1px solid rgba(26,23,18,.18)",
        }}
      >
        {steps.map((s, i) => (
          <div
            key={s.n}
            style={{
              padding: i === 0 ? "26px 24px 26px 0" : i === steps.length - 1 ? "26px 0 26px 24px" : "26px 24px",
              borderRight: i < steps.length - 1 ? "1px solid rgba(26,23,18,.12)" : "none",
            }}
          >
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 30, color: "var(--accent)", marginBottom: 10 }}>{s.n}</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{s.t}</div>
            <div style={{ fontSize: 13.5, color: "#5c554a" }}>{s.d}</div>
          </div>
        ))}
      </div>
      <Link href="/projects/ai-job-application-automation" style={{ display: "inline-block", marginTop: 28, fontSize: 14, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
        View Full Case Study →
      </Link>
    </section>
  );
}
