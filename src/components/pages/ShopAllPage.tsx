import { useState } from "react";
import ProductCard, { type Product } from "@/components/ProductCard";

const allProducts: Product[] = [
  { id: "premium-cotton-shirt", name: "Premium Cotton Shirt", price: 49.00, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80", href: "/product-details" },
  { id: "classic-white-sneakers", name: "Classic White Sneakers", price: 89.00, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80" },
  { id: "minimal-shoulder-bag", name: "Minimal Shoulder Bag", price: 69.00, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" },
  { id: "tailored-beige-blazer", name: "Tailored Beige Blazer", price: 129.00, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80" },
  { id: "minimal-black-backpack", name: "Minimal Black Backpack", price: 74.00, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" },
  { id: "soft-knit-sweater", name: "Soft Knit Sweater", price: 59.00, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80" },
  { id: "classic-denim-jacket", name: "Classic Denim Jacket", price: 95.00, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80" },
  { id: "modern-leather-watch", name: "Modern Leather Watch", price: 119.00, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
];

const PAGE_SIZE = 4;

export default function ShopAllPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const displayed = allProducts.slice(0, visible);
  const hasMore = visible < allProducts.length;

  return (
    <section className="section-padding" aria-labelledby="shop-all-title">
      <div className="section-head section-head-stack">
        <h1 className="section-title align-left" id="shop-all-title">Shop All Products</h1>
        <p className="section-subtitle">Browse our complete desktop collection and pick your favorites.</p>
      </div>
      <div className="product-grid">
        {displayed.map((p) => (
          <ProductCard key={p.id} product={p} showLink={!!p.href} />
        ))}
      </div>
      {hasMore && (
        <div className="listing-actions">
          <button className="load-more-btn" type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
