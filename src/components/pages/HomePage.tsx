import { useCart } from "@/lib/cart";

const products = [
  {
    id: "premium-cotton-shirt",
    name: "Premium Cotton Shirt",
    price: 49.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "classic-leather-sneakers",
    name: "Classic Leather Sneakers",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "minimal-shoulder-bag",
    name: "Minimal Shoulder Bag",
    price: 69.00,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
  },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <div className="product-image">
        <img
          loading="lazy"
          decoding="async"
          src={product.image}
          alt={product.name}
        />
      </div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button
        className="product-action buy-now"
        type="button"
        onClick={() => addItem(product)}
      >
        Buy Now
      </button>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Curated Everyday Luxury</h1>
          <p>Discover elevated essentials designed for modern living and timeless style.</p>
          <div className="hero-actions" style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a className="product-action buy-now" href="/shop-all" style={{ width: "auto", padding: "1rem 2.5rem", textDecoration: "none", marginTop: 0 }}>
              Shop Collection
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <h2 className="section-title">Featured Picks</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
