import { useTheme, type Theme } from "@/lib/theme";
import { useCart } from "@/lib/cart";

const themes: { value: Theme; label: string; dot: string }[] = [
  { value: "system", label: "System", dot: "var(--accent)" },
  { value: "light",    label: "Light",  dot: "#f5f5f0" },
  { value: "dark",     label: "Dark",   dot: "#0f172a" },
  { value: "sepia",    label: "Sepia",  dot: "#dcc8af" },
  { value: "ocean",    label: "Ocean",  dot: "#2ba8c2" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { count, open } = useCart();

  return (
    <header>
      <div className="header-container">
        <div className="logo">E-Commerce Store</div>
        <div className="header-right">
          <div className="search-container">
            <span className="material-symbols-outlined search-icon">search</span>
            <input type="text" placeholder="Search our collection..." />
          </div>
          <div className="header-icons">
            <a href="/sign-in" className="icon-link" aria-label="Account">
              <span className="material-symbols-rounded">account_circle</span>
            </a>
            <button className="cart-icon cart-toggle" type="button" onClick={open} aria-label="Open cart">
              <span className="material-symbols-rounded">shopping_bag</span>
              <span className="cart-count" id="cart-count-header">{count}</span>
            </button>
            <div className="theme-switcher">
              <label htmlFor="theme-select">Theme</label>
              <select
                id="theme-select"
                className="theme-select"
                value={theme}
                onChange={(e) => setTheme(e.target.value as Theme)}
                aria-label="Select theme"
              >
                {themes.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/new-arrivals">New Arrivals</a></li>
          <li><a href="/shop-all">Shop All</a></li>
          <li><a href="/best-sellers">Best Sellers</a></li>
          <li><a href="/collections">Collections</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
