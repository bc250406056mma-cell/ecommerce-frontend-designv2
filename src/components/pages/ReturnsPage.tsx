export default function ReturnsPage() {
  return (
    <div className="policy-shell" style={{ paddingTop: "54px", paddingBottom: "72px" }}>
      <header className="policy-header">
        <p className="policy-eyebrow">Customer Care</p>
        <h1>Returns & Exchanges</h1>
        <p className="policy-lead">Simple returns and exchanges within 30 days of delivery.</p>
      </header>

      <section className="policy-section">
        <h2>Eligibility</h2>
        <p>Products are eligible for return within 30 days if unused, in original packaging, and with all tags attached.</p>
      </section>

      <section className="policy-section">
        <h2>How to Return</h2>
        <ul>
          <li>Log in to your account and open your order history.</li>
          <li>Select the item and choose a return reason.</li>
          <li>Download the shipping label and hand over the parcel.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Refund Timeline</h2>
        <p>Refunds are initiated within 3 business days after quality check. Bank processing can take an additional 5 to 7 business days.</p>
      </section>

      <section className="policy-section">
        <h2>Exchanges</h2>
        <p>Size and color exchanges are supported for in-stock items. If unavailable, a full refund is issued to the original payment method.</p>
      </section>
    </div>
  );
}
