import ProductCard, { type Product } from "@/components/ProductCard";

const products: Product[] = [
  { id: "classic-leather-sneakers", name: "Classic Leather Sneakers", price: 89.00, image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=80" },
  { id: "olive-utility-jacket", name: "Olive Utility Jacket", price: 98.00, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
  { id: "gold-frame-sunglasses", name: "Gold Frame Sunglasses", price: 65.00, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=900&q=80" },
  { id: "tailored-beige-blazer", name: "Tailored Beige Blazer", price: 129.00, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80" },
];

export default function BestSellersPage() {
  return (
    <section className="section-padding" aria-labelledby="best-sellers-title">
      <h1 className="section-title" id="best-sellers-title">Best Sellers</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
