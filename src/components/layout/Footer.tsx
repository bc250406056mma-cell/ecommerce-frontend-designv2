interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  content?: string;
  newsletter?: boolean;
  links?: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "About Us",
    content: "Curating the finest collection of timeless pieces for your home and lifestyle. Quality meets classic design.",
  },
  {
    title: "Customer Care",
    links: [
      { label: "Shipping Policy", href: "/shipping" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "FAQs", href: "/faq" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Store Locator", href: "/store-locator" },
      { label: "Affiliates", href: "/affiliates" },
    ],
  },
  {
    title: "Newsletter",
    newsletter: true,
    content: "Join our list for exclusive previews.",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {footerColumns.map((col) => (
          <div key={col.title} className="footer-column">
            <h3>{col.title}</h3>
            {col.newsletter ? (
              <>
                <p>{col.content}</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your Email" />
                  <button type="submit">Join</button>
                </form>
              </>
            ) : col.links ? (
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{col.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        &copy; 2026 E-Commerce Store. All rights reserved.
      </div>
    </footer>
  );
}
