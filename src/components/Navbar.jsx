import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import rjLogoNew from "../assets/rj-logo-new.png";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navbar transparent to solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/brands", label: "Our Brands" },
    { to: "/about", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl text-white transition-transform duration-300">
              <img
                src={rjLogoNew}
                alt="logo"
                className="w-full h-full rounded-lg object-contain"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-700 rounded-md flex items-center justify-center text-[8px] font-bold">
                RJ
              </div>
            </div>
            <div>
              <span
                className={`block text-xl font-black tracking-tight ${
                  isScrolled ? "text-white" : "text-amber"
                } group-hover:text-amber-400 transition-colors`}
              >
                RJ PLYWOOD
              </span>
              <span className="block text-xs font-bold tracking-widest text-amber-500 uppercase -mt-1">
                &amp; HARDWARES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 hover:text-amber-400 ${
                    isActive
                      ? "text-amber-400 font-bold"
                      : isScrolled
                        ? "text-slate-200"
                        : "text-amber"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918072808083"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918072808083"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 text-white font-bold text-sm shadow-md shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat With Us</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 py-4 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `text-left text-base font-semibold py-2 border-b border-slate-900 transition-colors ${
                    isActive
                      ? "text-amber-400 font-bold pl-2 border-l-2 border-amber-400"
                      : "text-slate-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+918072808083"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-bold text-center mt-2 shadow-lg shadow-amber-500/20"
            >
              <Phone className="w-5 h-5" />
              <span>+91 80728 08083</span>
            </a>
            <a
              href="https://wa.me/918072808083"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-bold text-center mt-2 shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat With Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
