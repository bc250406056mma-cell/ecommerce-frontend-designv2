export default function PrivacyPage() {
  return (
    <div className="policy-shell" style={{ paddingTop: "54px", paddingBottom: "72px" }}>
      <header className="policy-header">
        <p className="policy-eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="policy-lead">How we collect, use, and protect your personal information.</p>
      </header>

      <section className="policy-section">
        <h2>Information We Collect</h2>
        <p>We collect account details, order information, and support requests to process purchases and improve service quality.</p>
      </section>

      <section className="policy-section">
        <h2>How We Use Information</h2>
        <ul>
          <li>To process transactions and deliver orders</li>
          <li>To communicate order updates and support responses</li>
          <li>To improve product recommendations and site usability</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Data Security</h2>
        <p>We use secure storage and encrypted transactions. Payment details are processed by trusted providers and are not stored in plain text.</p>
      </section>

      <section className="policy-section">
        <h2>Your Rights</h2>
        <p>You may request access, correction, or deletion of personal data by contacting our support team.</p>
      </section>
    </div>
  );
}
