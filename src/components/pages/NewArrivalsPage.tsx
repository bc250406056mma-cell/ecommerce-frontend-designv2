import ProductCard, { type Product } from "@/components/ProductCard";

const products: Product[] = [
  { id: "striped-cotton-shirt", name: "Striped Cotton Shirt", price: 45.00, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80" },
  { id: "tailored-beige-blazer", name: "Tailored Beige Blazer", price: 129.00, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80" },
  { id: "classic-white-sneakers", name: "Classic White Sneakers", price: 89.00, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80" },
  { id: "brown-leather-tote", name: "Brown Leather Tote", price: 110.00, image: "https://images.unsplash.com/photo-1612902456551-333ac5afa26d?auto=format&fit=crop&w=900&q=80" },
  { id: "olive-utility-jacket", name: "Olive Utility Jacket", price: 98.00, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
  { id: "gold-frame-sunglasses", name: "Gold Frame Sunglasses", price: 65.00, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=900&q=80" },
];

export default function NewArrivalsPage() {
  return (
    <section className="section-padding" aria-labelledby="new-arrivals-title">
      <h1 className="section-title" id="new-arrivals-title">New Arrivals</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
