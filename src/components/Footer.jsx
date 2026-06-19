import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { WhatsApp } from "@mui/icons-material";
import { PRODUCT_CATEGORIES } from "../data/mockData";
import rjLogoNew from "../assets/rj-logo-new.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-900">
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl text-white transition-transform duration-300">
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
                <span className="block text-lg font-black text-white tracking-tight">
                  RJ PLYWOOD
                </span>
                <span className="block text-[10px] font-bold text-amber-500 uppercase tracking-widest -mt-1">
                  &amp; HARDWARES
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Pioneering quality interior solutions since 2005. Sourcing
              authentic plywood, modular hardware, and luxury materials to
              transform your dreams into structural masterpieces.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918072808083"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsApp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6 relative pl-3 border-l-2 border-amber-500">
              Quick Navigation
            </h3>
            <ul className="space-y-3.5">
              {[
                { label: "Home Page", to: "/" },
                { label: "Products Catalog", to: "/products" },
                { label: "Our Story & Heritage", to: "/about" },
                { label: "Inspiration Gallery", to: "/gallery" },
                { label: "Contact Help Desk", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm hover:text-amber-500 transition-colors flex items-center gap-1 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6 relative pl-3 border-l-2 border-amber-500">
              Product Categories
            </h3>
            <ul className="space-y-3.5">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/category/${cat.id}`}
                    className="text-sm hover:text-amber-500 transition-colors flex items-center gap-1 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6 relative pl-3 border-l-2 border-amber-500">
              Store Location
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>RJ Plywood &amp; Hardwares</strong>
                  <br />
                  No. 153/2, SRH Building, Alagar Kovil Mian Road, K Pudur,
                  Madurai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a
                  href="tel:+918072808083"
                  className="hover:text-amber-500 transition-colors"
                >
                  +91 80728 08083
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a
                  href="mailto:info@rjplywood.com"
                  className="hover:text-amber-500 transition-colors"
                >
                  info@rjplywood.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Bottom Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} RJ Plywood &amp; Hardwares. All Rights
            Reserved.
          </p>
          <div className="mt-2 sm:mt-0 flex gap-4">
            <Link
              to="/privacy"
              className="hover:underline hover:text-amber-500 cursor-pointer transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              to="/terms"
              className="hover:underline hover:text-amber-500 cursor-pointer transition-colors"
            >
              Terms of Service
            </Link>
            <span>•</span>
            <span className="text-amber-600 font-semibold">
              Delivered with absolute trust
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
