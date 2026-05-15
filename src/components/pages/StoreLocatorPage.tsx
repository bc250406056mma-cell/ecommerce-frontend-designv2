export default function StoreLocatorPage() {
  return (
    <div className="policy-shell" style={{ paddingTop: "54px", paddingBottom: "72px" }}>
      <header className="policy-header">
        <p className="policy-eyebrow">In-Store Services</p>
        <h1>Store Locator</h1>
        <p className="policy-lead">Visit one of our experience stores for styling support and pickups.</p>
      </header>

      <section className="policy-section">
        <h2>Downtown Flagship</h2>
        <p>
          101 Main Street, Downtown<br />
          Mon - Sat: 10:00 AM to 9:00 PM<br />
          Sun: 11:00 AM to 7:00 PM
        </p>
      </section>

      <section className="policy-section">
        <h2>North Mall</h2>
        <p>
          Level 2, North Mall Center<br />
          Mon - Sun: 10:00 AM to 10:00 PM
        </p>
      </section>

      <section className="policy-section">
        <h2>Pickup Services</h2>
        <p>Buy online and pick up in-store within 24 hours for eligible items. Bring your order email and a valid ID at pickup.</p>
      </section>
    </div>
  );
}
