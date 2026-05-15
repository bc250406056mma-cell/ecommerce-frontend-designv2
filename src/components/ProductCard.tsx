import { useCart } from "@/lib/cart";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  href?: string;
}

interface ProductCardProps {
  product: Product;
  showLink?: boolean;
}

export default function ProductCard({ product, showLink }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <div className="product-image">
        <img loading="lazy" decoding="async" src={product.image} alt={product.name} />
      </div>
      <h3 className="product-title">
        {showLink && product.href ? (
          <a href={product.href}>{product.name}</a>
        ) : (
          product.name
        )}
      </h3>
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
