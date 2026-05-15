export default function ShippingPage() {
  return (
    <div className="policy-shell" style={{ paddingTop: "54px", paddingBottom: "72px" }}>
      <header className="policy-header">
        <p className="policy-eyebrow">Customer Care</p>
        <h1>Shipping Policy</h1>
        <p className="policy-lead">Expected timelines, delivery charges, and tracking details for all orders.</p>
      </header>

      <section className="policy-section">
        <h2>Order Processing</h2>
        <p>Orders are processed Monday through Saturday within 1 to 2 business days. Orders placed after 5 PM are processed the next business day.</p>
      </section>

      <section className="policy-section">
        <h2>Delivery Timelines</h2>
        <ul>
          <li>Standard Shipping: 4 to 7 business days</li>
          <li>Express Shipping: 2 to 3 business days</li>
          <li>Priority Shipping: Next business day in selected cities</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Shipping Fees</h2>
        <p>Domestic orders over $75 receive free standard delivery. Shipping charges for smaller carts are shown during checkout before payment.</p>
      </section>

      <section className="policy-section">
        <h2>Tracking and Delays</h2>
        <p>You receive a tracking link by email once your package ships. During peak seasons or severe weather, delivery may take longer than estimated.</p>
      </section>

      <p className="policy-note">Last updated: May 2026</p>
    </div>
  );
}
