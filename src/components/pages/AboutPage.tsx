export default function AboutPage() {
  return (
    <section className="section-padding" aria-labelledby="about-title">
      <h1 className="section-title" id="about-title">About Us</h1>
      <p style={{ maxWidth: 900, margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.9 }}>
        We curate timeless essentials designed to look good, feel good, and last. Our collections are built around quality fabrics,
        thoughtful details, and clean silhouettes—made for everyday wear and effortless style.
      </p>
      <div style={{ maxWidth: 900, margin: "2rem auto 0", color: "var(--text-muted)", lineHeight: 1.9 }}>
        <p><strong style={{ color: "var(--text-dark)" }}>Our promise:</strong> quality you can feel, design you can trust, and service that respects your time.</p>
        <p style={{ marginTop: "0.7rem" }}>Thanks for shopping with us.</p>
      </div>
    </section>
  );
}
