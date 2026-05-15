import { useEffect, useState } from "react";

interface ReceiptData {
  receiptNumber: string;
  orderId: string;
  issuedAt: string;
  paymentMethod: string;
  cardholder: string;
  items: { name: string; quantity: number; price: number }[];
  subtotal: number;
}

export default function ReceiptPage() {
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("last-receipt");
      if (raw) {
        const data = JSON.parse(raw) as ReceiptData;
        if (data?.items?.length > 0) {
          setReceipt(data);
          return;
        }
      }
    } catch {}
  }, []);

  if (!receipt) {
    return (
      <div className="section-padding" style={{ textAlign: "center", paddingTop: "4rem" }}>
        <h2>No receipt found</h2>
        <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>Complete a payment to generate your receipt.</p>
        <a className="product-action buy-now" href="/shop-all"
           style={{ width: "auto", padding: "1rem 2.5rem", textDecoration: "none", marginTop: "1.5rem", display: "inline-block" }}>
          Continue Shopping
        </a>
      </div>
    );
  }

  const dateStr = new Date(receipt.issuedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  }) + " at " + new Date(receipt.issuedAt).toLocaleTimeString("en-US", {
    hour: "2-digit", minute: "2-digit",
  });

  return (
    <div className="section-padding" data-receipt-page>
      <div className="receipt-page-card">
        <div className="receipt-page-header">
          <div className="receipt-brand">
            <span className="material-symbols-rounded receipt-brand-logo" style={{ fontSize: 38 }}>shopping_bag</span>
            <div>
              <p className="receipt-brand-name">E-Commerce Store</p>
              <p className="receipt-brand-tag">Premium lifestyle essentials</p>
            </div>
          </div>
          <div className="receipt-status">
            <span className="material-symbols-rounded receipt-page-icon" aria-hidden="true">verified</span>
            <p>Payment Confirmed</p>
          </div>
        </div>

        <h1 className="receipt-title">Official Payment Receipt</h1>
        <p className="payment-page-subtitle">This bill is generated automatically after successful payment.</p>

        <div className="receipt-meta-grid">
          <article className="receipt-meta-card">
            <p className="receipt-meta-label">Receipt Number</p>
            <p className="receipt-meta-value">{receipt.receiptNumber}</p>
          </article>
          <article className="receipt-meta-card">
            <p className="receipt-meta-label">Order ID</p>
            <p className="receipt-meta-value">{receipt.orderId}</p>
          </article>
          <article className="receipt-meta-card">
            <p className="receipt-meta-label">Date & Time</p>
            <p className="receipt-meta-value">{dateStr}</p>
          </article>
          <article className="receipt-meta-card">
            <p className="receipt-meta-label">Payment Method</p>
            <p className="receipt-meta-value">{receipt.paymentMethod}</p>
          </article>
        </div>

        <table className="receipt-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {receipt.items.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="receipt-summary">
          <p><strong>Grand Total</strong> <span>(incl. taxes)</span></p>
          <p className="receipt-grand-total">${receipt.subtotal.toFixed(2)}</p>
        </div>

        <div className="receipt-actions">
          <button className="product-action pay-btn" type="button" onClick={() => window.print()}>
            Print Receipt
          </button>
          <a className="details-secondary" href="/shop-all">Continue Shopping</a>
        </div>

        <p className="receipt-footer-note">Need help with your order? Contact support@ecommercestore.com</p>
      </div>
    </div>
  );
}
