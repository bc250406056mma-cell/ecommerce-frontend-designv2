export default function FAQPage() {
  return (
    <div className="policy-shell" style={{ paddingTop: "54px", paddingBottom: "72px" }}>
      <header className="policy-header">
        <p className="policy-eyebrow">Support</p>
        <h1>Frequently Asked Questions</h1>
        <p className="policy-lead">Answers to the most common shopping and delivery questions.</p>
      </header>

      <section className="policy-section">
        <h2>How can I track my order?</h2>
        <p>After shipping, we email you a tracking link. You can also see live status from your account order history.</p>
      </section>

      <section className="policy-section">
        <h2>Can I change my address after placing an order?</h2>
        <p>Yes, you can update your address before the order is dispatched by contacting support through the Contact page.</p>
      </section>

      <section className="policy-section">
        <h2>Do you ship internationally?</h2>
        <p>International shipping is available in selected regions. Charges and delivery estimates are shown at checkout.</p>
      </section>

      <section className="policy-section">
        <h2>What payment options are accepted?</h2>
        <p>We accept major debit cards, credit cards, wallets, and secure bank transfer options available by region.</p>
      </section>
    </div>
  );
}
