export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(26,23,18,.12)",
        padding: "28px var(--pad-x)",
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
        fontSize: 13,
        color: "#8a8170",
      }}
    >
      <span>© 2026 Trissaan A Shanmugasundaram</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>Melbourne, AU · Open to Work</span>
    </footer>
  );
}
