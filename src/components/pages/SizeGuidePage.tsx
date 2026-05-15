export default function SizeGuidePage() {
  return (
    <div className="policy-shell" style={{ paddingTop: "54px", paddingBottom: "72px" }}>
      <header className="policy-header">
        <p className="policy-eyebrow">Fit & Sizing</p>
        <h1>Size Guide</h1>
        <p className="policy-lead">Use this guide to find your best fit before checkout.</p>
      </header>

      <section className="policy-section">
        <h2>Women's Apparel</h2>
        <ul>
          <li>XS: Bust 31-32 in, Waist 24-25 in</li>
          <li>S: Bust 33-34 in, Waist 26-27 in</li>
          <li>M: Bust 35-36 in, Waist 28-29 in</li>
          <li>L: Bust 37-39 in, Waist 30-32 in</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Men's Apparel</h2>
        <ul>
          <li>S: Chest 36-38 in, Waist 30-32 in</li>
          <li>M: Chest 39-41 in, Waist 33-35 in</li>
          <li>L: Chest 42-44 in, Waist 36-38 in</li>
          <li>XL: Chest 45-47 in, Waist 39-41 in</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Footwear</h2>
        <p>Choose your standard US size. If between sizes, select one size up for comfort fit, especially for leather products.</p>
      </section>
    </div>
  );
}
