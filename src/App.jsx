import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from "./components/TermsPage";
import { Preloader, CentralTransitionLoader } from "./components/Loader";
import "./App.css";
import {
  PRODUCT_CATEGORIES,
  PRODUCTS,
  TIMELINE_EVENTS,
  BRAND_PARTNERS,
  TESTIMONIALS,
} from "./data/mockData";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Trigger page transition loading overlay on route switches
  useEffect(() => {
    if (showPreloader) return;
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450); // Easing duration for central loader
    return () => clearTimeout(timer);
  }, [location.pathname, showPreloader]);

  if (showPreloader) {
    return <Preloader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col antialiased selection:bg-amber-500 selection:text-white">
      {/* Central Loading Spinner Transition */}
      {isLoading && <CentralTransitionLoader />}

      {/* Scroll to Top on Page Navigate */}
      <ScrollToTop />

      {/* Navbar Component */}
      <Navbar />

      {/* Main Page Content Switcher via Router */}
      <main className="flex-grow pt-[80px]">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                categories={PRODUCT_CATEGORIES}
                products={PRODUCTS}
                testimonials={TESTIMONIALS}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                categories={PRODUCT_CATEGORIES}
                products={PRODUCTS}
              />
            }
          />
          <Route
            path="/products/category/:categoryId"
            element={
              <ProductsPage
                categories={PRODUCT_CATEGORIES}
                products={PRODUCTS}
              />
            }
          />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route
            path="/about"
            element={
              <AboutPage timeline={TIMELINE_EVENTS} brands={BRAND_PARTNERS} />
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Floating Scroll to Top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 text-white shadow-xl shadow-amber-500/20 z-40 hover:-translate-y-1 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
