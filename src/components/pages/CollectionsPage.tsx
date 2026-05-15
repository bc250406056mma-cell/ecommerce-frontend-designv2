import ProductCard, { type Product } from "@/components/ProductCard";

const products: Product[] = [
  { id: "summer-essentials", name: "Summer Essentials", price: 39.00, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80" },
  { id: "workwear-edit", name: "Workwear Edit", price: 55.00, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" },
  { id: "weekend-sneakers", name: "Weekend Sneakers", price: 79.00, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80" },
  { id: "accessories-studio", name: "Accessories Studio", price: 25.00, image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80" },
];

export default function CollectionsPage() {
  return (
    <section className="section-padding" aria-labelledby="collections-title">
      <h1 className="section-title" id="collections-title">Collections</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
