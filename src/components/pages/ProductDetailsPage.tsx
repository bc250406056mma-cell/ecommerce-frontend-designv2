import { useState } from "react";
import { useCart } from "@/lib/cart";

const sizes = [
  { value: "", label: "Choose size" },
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
  { value: "xl", label: "X-Large" },
];

const product = {
  id: "tailored-beige-blazer",
  name: "Tailored Beige Blazer",
  price: 129.00,
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
};

export default function ProductDetailsPage() {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }
    setError(false);
    addItem(product);
  };

  return (
    <>
      <section className="section-padding product-details-page" aria-labelledby="product-detail-title">
        <div className="product-gallery">
          <img loading="eager" decoding="async" src={product.image} alt="Tailored beige blazer product image" />
        </div>

        <div className="product-details-copy">
          <p className="hero-eyebrow">Signature Collection</p>
          <h1 id="product-detail-title">Tailored Beige Blazer</h1>
          <p className="product-detail-meta">SKU: TBB-2026 | Material: Premium Wool Blend</p>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-description">
            A modern tailored blazer with a clean silhouette and structured shoulders. Designed for versatile
            styling from office-ready looks to elevated casual wear.
          </p>

          <label className="size-label" htmlFor="product-size">Select Size</label>
          <select
            id="product-size"
            className="size-select"
            value={selectedSize}
            onChange={(e) => { setSelectedSize(e.target.value); setError(false); }}
          >
            {sizes.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          {error && <p className="size-error">Please select a size before adding this item to cart.</p>}

          <div className="product-detail-actions">
            <button className="product-action" type="button" onClick={handleAdd}>
              Buy Now
            </button>
            <a className="details-secondary" href="/shop-all">Back to Listing</a>
          </div>
        </div>
      </section>

      <section className="section-padding details-section" aria-label="Customer reviews and related products">
        <div className="details-grid">
          <article className="detail-panel">
            <h3>Customer Reviews</h3>
            <p><strong>4.8/5</strong> based on 128 verified ratings.</p>
            <ul>
              <li>Premium fabric quality and accurate fit.</li>
              <li>Excellent finishing and comfortable lining.</li>
              <li>Great for formal and semi-formal outfits.</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>Related Products</h3>
            <ul>
              <li><a href="/shop-all">Premium Cotton Shirt</a></li>
              <li><a href="/shop-all">Classic White Sneakers</a></li>
              <li><a href="/shop-all">Minimal Shoulder Bag</a></li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
