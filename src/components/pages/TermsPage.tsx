export default function TermsPage() {
  return (
    <div className="policy-shell" style={{ paddingTop: "54px", paddingBottom: "72px" }}>
      <header className="policy-header">
        <p className="policy-eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p className="policy-lead">Rules and conditions governing the use of our website and services.</p>
      </header>

      <section className="policy-section">
        <h2>Use of Website</h2>
        <p>By using this site, you agree to provide accurate information and avoid unlawful activity, misuse, or disruption of services.</p>
      </section>

      <section className="policy-section">
        <h2>Orders and Pricing</h2>
        <p>All prices are listed in local currency and may change without notice. We reserve the right to cancel fraudulent or incorrect orders.</p>
      </section>

      <section className="policy-section">
        <h2>Intellectual Property</h2>
        <p>All content, branding, and design assets on this site are protected and may not be reproduced without permission.</p>
      </section>

      <section className="policy-section">
        <h2>Limitation of Liability</h2>
        <p>We are not liable for indirect losses arising from use of this site, delays, or third-party service interruptions.</p>
      </section>
    </div>
  );
}
