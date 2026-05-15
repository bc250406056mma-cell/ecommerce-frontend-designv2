export default function ContactPage() {
  return (
    <section className="section-padding" aria-labelledby="contact-title">
      <h1 className="section-title" id="contact-title">Contact</h1>

      <div style={{ maxWidth: 900, margin: "0 auto", color: "var(--text-muted)", lineHeight: 1.9 }}>
        <p>Have a question about an order, sizing, or our collections? Send us a message and we&rsquo;ll reply within 1–2 business days.</p>
        <p style={{ marginTop: "0.7rem" }}><strong style={{ color: "var(--text-dark)" }}>Email:</strong> support@ecommercestore.test</p>
        <p><strong style={{ color: "var(--text-dark)" }}>Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM</p>
      </div>

      <form
        style={{ maxWidth: 900, margin: "2rem auto 0", display: "grid", gap: "0.8rem" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          style={{ padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--input-bg)", color: "var(--text-dark)" }}
          type="text" placeholder="Your Name" required
        />
        <input
          style={{ padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--input-bg)", color: "var(--text-dark)" }}
          type="email" placeholder="Your Email" required
        />
        <textarea
          style={{ padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--input-bg)", color: "var(--text-dark)", minHeight: 140, resize: "vertical" }}
          placeholder="Message" required
        />
        <button className="product-action" type="submit" style={{ width: "fit-content" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}
