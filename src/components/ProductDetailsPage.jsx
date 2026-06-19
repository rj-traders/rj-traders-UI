import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  CheckCircle,
} from "lucide-react";
import { PRODUCTS } from "../data/mockData";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === id);
  }, [id]);

  const [selectedThickness, setSelectedThickness] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");

  // Auto-select first options
  useEffect(() => {
    if (!product) return;
    if (product.thicknesses) {
      setSelectedThickness(product.thicknesses[0]);
    } else {
      setSelectedThickness("");
    }
    if (product.sizes) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize("");
    }
    setInquirySent(false);
  }, [product]);

  // Derived price calculated dynamically
  const calculatedPrice = useMemo(() => {
    if (!product) return 0;
    let base = product.basePrice * quantity;
    // Slight multiplier modification based on thickness to simulate dynamic system
    if (selectedThickness && product.thicknesses) {
      const index = product.thicknesses.indexOf(selectedThickness);
      base = base * (1 + index * 0.25);
    }
    return Math.round(base);
  }, [product, selectedThickness, quantity]);

  // Handle local submit inquiry
  const handleSendInquiry = (e) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setInquirySent(true);
  };

  // Get other products in the same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id,
    );
  }, [product]);

  if (!product) {
    return (
      <div className="py-20 text-center bg-slate-50 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-slate-800">Product Not Found</h2>
        <p className="text-slate-600 mt-2">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/products"
          className="mt-6 px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
        >
          Back to Products Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-semibold">
          <Link to="/" className="hover:text-amber-500">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-amber-500">
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400 capitalize">{product.category}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-800 line-clamp-1">{product.name}</span>
        </div>

        {/* Main Double Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm">
          {/* Left Column: Premium Interactive Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 px-3 py-1 bg-slate-950/90 text-amber-400 text-xs font-bold rounded-lg uppercase tracking-wider">
                Certified Quality
              </span>
            </div>

            {/* Premium specs and icons */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase">
                    Material Safety
                  </span>
                  <span className="text-xs text-slate-700 font-semibold">
                    Fully Certified
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <Truck className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase">
                    Transit Support
                  </span>
                  <span className="text-xs text-slate-700 font-semibold">
                    Ready to Ship
                  </span>
                </div>
              </div>
            </div>

            {/* Core Features list */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 space-y-3">
              <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wide">
                Key Material Advantages
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-700 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Information & Live Calculator */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600">
                {product.category} Section
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
                {product.name}
              </h1>
              <p className="text-sm text-slate-500 italic mt-0.5">
                {product.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">
                {product.rating} Rating
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-400">
                {product.reviews} audited customer purchases
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Technical Parameters Table */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Technical Specifications
              </h3>
              <div className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden divide-y divide-slate-100">
                {Object.entries(product.specs).map(([label, val]) => (
                  <div key={label} className="grid grid-cols-12 p-3 text-xs">
                    <span className="col-span-5 font-bold text-slate-500 uppercase">
                      {label}
                    </span>
                    <span className="col-span-7 font-semibold text-slate-800">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selector Options & Pricing Engine */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-6">
              <h3 className="text-sm font-black text-slate-900 border-b border-slate-200/60 pb-2">
                Material Selector &amp; Estimator
              </h3>

              {/* Size Selector if exits */}
              {product.sizes && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase">
                    Select Sheet Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          selectedSize === s
                            ? "bg-slate-900 text-white"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Thickness Selector if exists */}
              {product.thicknesses && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase">
                    Select Calibrated Thickness:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.thicknesses.map((th) => (
                      <button
                        key={th}
                        onClick={() => setSelectedThickness(th)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedThickness === th
                            ? "bg-amber-500 text-slate-950 shadow-sm"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {th}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Changer */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase">
                    Project Requirement Volume:
                  </label>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded bg-white border border-slate-200 font-bold hover:bg-slate-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      min="1"
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-16 h-8 text-center bg-white border border-slate-200 text-xs font-extrabold focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded bg-white border border-slate-200 font-bold hover:bg-slate-100"
                    >
                      +
                    </button>
                    <span className="text-xs text-slate-500 ml-1 font-bold">
                      {product.unit}s
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-xs text-slate-400 font-bold uppercase">
                    Estimated Base Cost
                  </span>
                  <span className="text-2xl font-black text-slate-900">
                    ₹{calculatedPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Instant Quotation Form Block */}
              <div className="pt-4 border-t border-slate-200/60">
                {!inquirySent ? (
                  <form onSubmit={handleSendInquiry} className="space-y-3">
                    <p className="text-xs text-slate-500 italic">
                      Submit this design request to our store desk. We will call
                      you immediately back with exact shipping schedules and
                      custom pricing.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        required
                        className="p-2.5 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        required
                        className="p-2.5 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-[1.01] transition-transform text-slate-950 font-black text-sm uppercase tracking-wider"
                    >
                      Submit Custom Material Order
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center space-y-2">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-800">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Thank you {inquiryName}. Our Madurai warehouse executive
                      is preparing your quotation for {quantity} {product.unit}{" "}
                      of {product.name} ({selectedThickness || "Standard"}). We
                      will call you at {inquiryPhone} in less than 30 minutes!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Category products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              Similar Materials in this Category
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group bg-white p-4 rounded-2xl border border-slate-100 hover:border-amber-500/40 cursor-pointer shadow-sm hover:shadow-md transition-all block"
                >
                  <div className="h-40 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-3 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {p.name}
                  </h4>
                  <p className="text-xs text-amber-600 font-medium mt-0.5">
                    {p.tagline}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-black text-slate-900">
                      ₹{p.basePrice}/{p.unit}
                    </span>
                    <span className="text-[10px] text-amber-600 font-extrabold uppercase">
                      View Specs
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
