import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BRANDS } from "../data/mockData";
import {
  ArrowRight,
  X,
  ExternalLink,
  ShieldCheck,
  Award,
  Layers,
  ArrowLeft,
} from "lucide-react";

export default function BrandsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Group categories for filtering
  const brandCategories = [
    { id: "all", name: "All Divisions" },
    { id: "plywood_mdf", name: "Plywood, MDF & HDF" },
    { id: "hardware", name: "Architectural Hardware" },
    { id: "laminates", name: "Decorative Laminates" },
    { id: "veneers", name: "Natural Veneers" },
    { id: "adhesives", name: "Strong Adhesives" },
  ];

  // Filter brands based on category tab
  const filteredBrands = useMemo(() => {
    if (selectedCategory === "all") return BRANDS;
    return BRANDS.filter((brand) => brand.category === selectedCategory);
  }, [selectedCategory]);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const handleViewProducts = (brand) => {
    setSelectedBrand(null);
    // Determine redirect route based on brand specifications
    if (brand.category === "hardware") {
      navigate(`/products/category/hardware?brand=${brand.id}`);
    } else if (brand.category === "laminates") {
      navigate(`/products/category/laminates?brand=${brand.id}`);
    } else if (brand.category === "veneers") {
      navigate(`/products/category/veneers?brand=${brand.id}`);
    } else if (brand.category === "adhesives") {
      navigate(`/products/category/adhesives?brand=${brand.id}`);
    } else if (brand.category === "plywood_mdf") {
      // Goes to plywood, MDF and HDF. Show all products for this brand
      navigate(`/products?brand=${brand.id}`);
    } else {
      navigate(`/products?brand=${brand.id}`);
    }
  };

  return (
    <div className="animate-fadeIn min-h-[90vh] bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-amber-500 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back</span>
          </button>
        </div>

        {/* Page Hero Header */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white border border-slate-900 shadow-2xl p-8 sm:p-12 lg:p-16 mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-orange-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-black text-xs uppercase tracking-widest border border-amber-500/20">
              Trusted Partnerships
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-amber-300 bg-clip-text text-transparent">
              Authorized Brand Partners
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              We collaborate with global leaders and premier national
              manufacturers to deliver structural materials that set benchmarks
              in durability, security, and aesthetics. Click on any brand to
              view details and explore their product lines.
            </p>
            <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-amber-500" />
                <span>100% Genuine Materials</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4.5 h-4.5 text-amber-500" />
                <span>Authorized Dealerships</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4.5 h-4.5 text-amber-500" />
                <span>Calibrated Specifications</span>
              </span>
            </div>
          </div>
        </div>

        {/* Division Selection Row */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          {brandCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-slate-950 text-amber-400 shadow-md scale-102"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => handleBrandClick(brand)}
              className="group bg-white rounded-3xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-2xl hover:border-slate-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Card visual elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-[80px] pointer-events-none transition-all group-hover:scale-110" />

              <div className="space-y-6">
                {/* Brand Logo */}
                <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-150 p-2 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>

                {/* Brand Text Details */}
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                    {brand.category === "plywood_mdf"
                      ? "Plywood, MDF & HDF"
                      : brand.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-500 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {brand.description}
                  </p>
                </div>
              </div>

              {/* Action Button Link */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="group-hover:text-amber-500 transition-colors">
                  View Details
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay Detail Dialog */}
        {selectedBrand && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div
              className="bg-white rounded-3xl max-w-2xl w-full border border-slate-100 shadow-2xl overflow-hidden animate-scaleIn relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBrand(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors z-20"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Brand Image/Hero */}
              <div className="md:w-2/5 bg-slate-50 border-r border-slate-100 p-8 flex flex-col items-center justify-center min-h-[220px]">
                <div className="w-32 h-32 rounded-2xl bg-white border border-slate-200 p-3 flex items-center justify-center shadow-lg">
                  <img
                    src={selectedBrand.logo}
                    alt={selectedBrand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-black text-slate-950 text-center mt-4">
                  {selectedBrand.name}
                </h3>
                <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-3 py-1 rounded-full mt-2 tracking-wider">
                  {selectedBrand.category === "plywood_mdf"
                    ? "Plywood, MDF & HDF"
                    : selectedBrand.category}
                </span>
              </div>

              {/* Right Side: Information Content */}
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1">
                      Brand Biography
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedBrand.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1.5">
                      Key Highlights
                    </h4>
                    <p className="text-sm text-slate-800 font-medium bg-amber-50/50 border border-amber-100/30 rounded-xl p-3.5 leading-relaxed">
                      {selectedBrand.details}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-3">
                  <button
                    onClick={() => handleViewProducts(selectedBrand)}
                    className="w-full py-3 px-5 bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 font-black text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20"
                  >
                    <span>View Brand Products</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="w-full py-2.5 px-5 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 font-bold text-xs rounded-xl transition-all duration-200 border border-slate-200/40 text-center"
                  >
                    Back to Brand Directory
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
