import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";

type FieldType = "wallet" | "card" | "digital" | "bank";

const methodFieldMap: Record<string, FieldType> = {
  Easypaisa: "wallet", JazzCash: "wallet", "HBL Konnect": "wallet",
  "UBL Omni": "wallet", NayaPay: "wallet", SadaPay: "wallet",
  "Visa / Mastercard": "card", PayPal: "digital", "Apple Pay": "digital",
  "Google Pay": "digital", Stripe: "digital", "Bank Transfer": "bank",
};

const methodsPK = [
  { value: "Easypaisa", icon: "account_balance_wallet" }, { value: "JazzCash", icon: "wallet" },
  { value: "HBL Konnect", icon: "account_balance" }, { value: "UBL Omni", icon: "currency_exchange" },
  { value: "NayaPay", icon: "payments" }, { value: "SadaPay", icon: "credit_card" },
];

const methodsIntl = [
  { value: "Visa / Mastercard", icon: "credit_card" }, { value: "PayPal", icon: "payments" },
  { value: "Apple Pay", icon: "phone_iphone" }, { value: "Google Pay", icon: "android" },
  { value: "Stripe", icon: "language" }, { value: "Bank Transfer", icon: "account_balance" },
];

const allMethods = [...methodsPK, ...methodsIntl];

interface ReceiptItem {
  name: string;
  quantity: number;
  price: number;
}

export default function PaymentPage() {
  const { items, clearItems } = useCart();
  const [selected, setSelected] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [paying, setPaying] = useState(false);
  const fieldType = selected ? methodFieldMap[selected] : undefined;

  const [orderItems, setOrderItems] = useState<ReceiptItem[]>([]);
  const subtotal = orderItems.reduce((s, i) => s + i.price * i.quantity, 0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("pending-order");
      if (raw) {
        const order = JSON.parse(raw);
        if (order?.items?.length > 0) {
          setOrderItems(order.items);
          return;
        }
      }
    } catch {}
    if (items.length > 0) {
      setOrderItems(items.map((i) => ({ name: i.name, quantity: i.quantity, price: i.price })));
    }
  }, [items]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected || !cardholder) return;
    setPaying(true);

    const receipt = {
      receiptNumber: `RCP-${Date.now().toString().slice(-8)}`,
      orderId: `ORD-${Date.now().toString(36).substring(2, 10).toUpperCase()}`,
      issuedAt: new Date().toISOString(),
      paymentMethod: selected,
      cardholder,
      items: orderItems,
      subtotal,
    };

    try {
      localStorage.setItem("last-receipt", JSON.stringify(receipt));
      localStorage.removeItem("pending-order");
    } catch {}

    clearItems();
    window.location.href = "/receipt";
  };

  return (
    <div className="payment-page section-padding">
      <div className="payment-page-card">
        <h1>Select Payment Method</h1>
        <p className="payment-page-subtitle">
          Secure checkout with Pakistan and international payment options.
        </p>

        <div className="payment-method-icons" aria-hidden="true">
          <span className="material-symbols-rounded">credit_card</span>
          <span className="material-symbols-rounded">account_balance</span>
          <span className="material-symbols-rounded">account_balance_wallet</span>
          <span className="material-symbols-rounded">payments</span>
        </div>

        <p className="payment-total-line">
          Total Payable: <strong id="payment-total">${subtotal.toFixed(2)}</strong>
        </p>

        {orderItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem 0" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              No items to pay for. Add products to your cart first.
            </p>
            <a className="product-action buy-now" href="/shop-all"
               style={{ width: "auto", padding: "1rem 2.5rem", textDecoration: "none", marginTop: 0, display: "inline-block" }}>
              Shop Now
            </a>
          </div>
        ) : (
          <>
            <section className="payment-methods-block" aria-label="Payment methods">
              <h2 className="payment-methods-title">Pakistan Methods</h2>
              <div className="payment-method-grid">
                {methodsPK.map((m) => (
                  <button
                    key={m.value}
                    className={`payment-method-chip${selected === m.value ? " is-selected" : ""}`}
                    type="button"
                    onClick={() => setSelected(m.value)}
                  >
                    <span className="material-symbols-rounded">{m.icon}</span>{m.value}
                  </button>
                ))}
              </div>
              <h2 className="payment-methods-title">International Methods</h2>
              <div className="payment-method-grid">
                {methodsIntl.map((m) => (
                  <button
                    key={m.value}
                    className={`payment-method-chip${selected === m.value ? " is-selected" : ""}`}
                    type="button"
                    onClick={() => setSelected(m.value)}
                  >
                    <span className="material-symbols-rounded">{m.icon}</span>{m.value}
                  </button>
                ))}
              </div>
            </section>

            <form className="payment-form page-payment-form" onSubmit={handleSubmit}>
              <label>
                Payment Method
                <select name="payment-method" value={selected} onChange={(e) => setSelected(e.target.value)} required>
                  <option value="">Select method</option>
                  {allMethods.map((m) => (<option key={m.value} value={m.value}>{m.value}</option>))}
                </select>
              </label>
              <label>
                Account / Card Holder Name
                <input type="text" name="cardholder" value={cardholder} onChange={(e) => setCardholder(e.target.value)} required placeholder="John Doe" />
              </label>

              <div className={`payment-fields${fieldType === "wallet" ? " active" : ""}`}>
                <label>Wallet Number <input type="tel" name="wallet-number" placeholder="03xx xxxxxxx" /></label>
                <label>CNIC Number <input type="text" name="cnic" placeholder="12345-1234567-1" /></label>
              </div>
              <div className={`payment-fields${fieldType === "card" ? " active" : ""}`}>
                <label>Card Number <input type="text" name="cardnumber" placeholder="4242 4242 4242 4242" /></label>
                <div className="payment-row">
                  <label>Expiry <input type="text" name="expiry" placeholder="MM/YY" /></label>
                  <label>CVV <input type="password" name="cvv" placeholder="123" /></label>
                </div>
              </div>
              <div className={`payment-fields${fieldType === "digital" ? " active" : ""}`}>
                <label>Email Address <input type="email" name="email" placeholder="example@email.com" /></label>
              </div>
              <div className={`payment-fields${fieldType === "bank" ? " active" : ""}`}>
                <label>IBAN / Account Number <input type="text" name="iban" placeholder="PKxx XXXX XXXX XXXX XXXX" /></label>
                <label>Bank Name <input type="text" name="bank-name" placeholder="HBL, UBL, MCB..." /></label>
                <label>Branch Code <input type="text" name="branch-code" placeholder="XXXX" /></label>
              </div>

              <button type="submit" className="product-action pay-btn" disabled={paying}>
                {paying ? "Processing..." : "Pay and Generate Bill"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
