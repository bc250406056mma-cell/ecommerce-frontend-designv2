import { useCart } from "@/lib/cart";

export default function CartPanel() {
  const { items, total, isOpen, close, removeItem, clearItems } = useCart();

  const handlePay = () => {
    if (items.length === 0) return;
    const order = {
      items: items.map((i) => ({ id: i.id, name: i.name, price: i.price, image: i.image, quantity: i.quantity })),
      subtotal: total,
      createdAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("pending-order", JSON.stringify(order));
    } catch {}
    close();
    window.location.href = "/payment";
  };

  return (
    <>
      <div
        className={`cart-overlay${isOpen ? " show" : ""}`}
        onClick={close}
      />
      <aside className={`cart-panel${isOpen ? " open" : ""}`}>
        <div className="cart-panel-header">
          <h3>Your Cart</h3>
          <button type="button" className="cart-close" onClick={close} aria-label="Close cart">
            Close
          </button>
        </div>
        <ul className="cart-items" id="cart-items">
          {items.length === 0 ? (
            <li className="cart-empty">Your cart is empty.</li>
          ) : (
            items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-meta">
                    ${item.price.toFixed(2)} &times; {item.quantity}
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  &times;
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span id="cart-total">${total.toFixed(2)}</span>
          </div>
          <div className="cart-footer-actions" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "0.5rem" }}>
            <button type="button" className="product-action" id="clear-cart" onClick={clearItems} style={{ width: "100%" }}>
              Clear Cart
            </button>
            <button
              type="button"
              className="product-action pay-btn"
              onClick={handlePay}
              disabled={items.length === 0}
              style={{ width: "100%", opacity: items.length === 0 ? 0.5 : 1 }}
            >
              Pay Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
