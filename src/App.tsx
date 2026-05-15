import { useState, useEffect } from "react";
import { ThemeProvider } from "@/lib/theme";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartPanel from "@/components/cart/CartPanel";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
import SignInPage from "@/components/pages/SignInPage";
import SignUpPage from "@/components/pages/SignUpPage";
import PaymentPage from "@/components/pages/PaymentPage";
import AffiliatesPage from "@/components/pages/AffiliatesPage";
import FAQPage from "@/components/pages/FAQPage";
import PrivacyPage from "@/components/pages/PrivacyPage";
import ReturnsPage from "@/components/pages/ReturnsPage";
import ShippingPage from "@/components/pages/ShippingPage";
import SizeGuidePage from "@/components/pages/SizeGuidePage";
import StoreLocatorPage from "@/components/pages/StoreLocatorPage";
import TermsPage from "@/components/pages/TermsPage";
import ReceiptPage from "@/components/pages/ReceiptPage";
import BestSellersPage from "@/components/pages/BestSellersPage";
import CollectionsPage from "@/components/pages/CollectionsPage";
import NewArrivalsPage from "@/components/pages/NewArrivalsPage";
import ShopAllPage from "@/components/pages/ShopAllPage";
import ProductDetailsPage from "@/components/pages/ProductDetailsPage";
import PageTransition from "@/components/PageTransition";

function useRouter() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePop = () => setPath(window.location.pathname);
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target || !target.href.startsWith(window.location.origin)) return;
      const url = new URL(target.href);
      if (url.origin !== window.location.origin) return;
      e.preventDefault();
      window.history.pushState({}, "", url.pathname);
      setPath(url.pathname);
    };
    window.addEventListener("popstate", handlePop);
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("popstate", handlePop);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return path;
}

function renderPage(path: string) {
  switch (path) {
    case "/about":
    case "/about.html":
      return <AboutPage />;
    case "/contact":
    case "/contact.html":
      return <ContactPage />;
    case "/sign-in":
    case "/sign-in.html":
      return <SignInPage />;
    case "/sign-up":
    case "/sign-up.html":
      return <SignUpPage />;
    case "/payment":
    case "/payment_methods":
    case "/payment_methods.html":
      return <PaymentPage />;
    case "/affiliates":
    case "/affiliates.html":
      return <AffiliatesPage />;
    case "/faq":
    case "/faq.html":
      return <FAQPage />;
    case "/privacy":
    case "/privacy-policy":
    case "/privacy.html":
      return <PrivacyPage />;
    case "/returns":
    case "/returns.html":
      return <ReturnsPage />;
    case "/shipping":
    case "/shipping.html":
      return <ShippingPage />;
    case "/size-guide":
    case "/size-guide.html":
      return <SizeGuidePage />;
    case "/store-locator":
    case "/store-locator.html":
      return <StoreLocatorPage />;
    case "/terms":
    case "/terms-of-service":
    case "/terms.html":
      return <TermsPage />;
    case "/receipt":
    case "/recipt":
    case "/recipt.html":
      return <ReceiptPage />;
    case "/best-sellers":
    case "/best-sellers.html":
      return <BestSellersPage />;
    case "/collections":
    case "/collections.html":
      return <CollectionsPage />;
    case "/new-arrivals":
    case "/new-arrivals.html":
      return <NewArrivalsPage />;
    case "/shop-all":
    case "/shop-all.html":
      return <ShopAllPage />;
    case "/product-details":
    case "/product-details.html":
      return <ProductDetailsPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const path = useRouter();
  return (
    <ThemeProvider>
      <CartProvider>
        <Header />
        <main>
          <PageTransition routeKey={path}>
            {renderPage(path)}
          </PageTransition>
        </main>
        <Footer />
        <CartPanel />
      </CartProvider>
    </ThemeProvider>
  );
}
