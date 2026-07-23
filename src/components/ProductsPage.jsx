import { useState, useMemo } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  Search,
  Star,
  Info,
  ChevronRight,
  X,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { BRANDS } from "../data/mockData";
import { CentralTransitionLoader } from "./Loader";
import useSEO from "../hooks/useSEO";

export default function ProductsPage({ categories, products }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const activeCategoryFilter = categoryId || "all";

  // Dynamic SEO based on active category
  const activeCategoryObj = categories.find(
    (c) => c.id === activeCategoryFilter,
  );
  const categoryName = activeCategoryObj
    ? activeCategoryObj.name
    : "All Products";

  useSEO({
    title: `${categoryName} | Product Catalog`,
    description: `Browse our premium range of ${categoryName.toLowerCase()} products in Madurai. RJ Plywood & Hardwares delivers quality calibrated plywood, architectural fittings, and luxury laminates.`,
    keywords: `${categoryName.toLowerCase()} in madurai, ${categoryName.toLowerCase()} supplier, rj plywood ${activeCategoryFilter}, architectural materials madurai`,
  });
  const brandFilter = searchParams.get("brand");

  const setActiveCategoryFilter = (catId) => {
    let brandParam = brandFilter ? `?brand=${brandFilter}` : "";

    if (brandFilter && catId !== "all") {
      const selectedBrandObj = BRANDS.find(
        (b) => b.id.toLowerCase() === brandFilter.toLowerCase(),
      );
      if (selectedBrandObj) {
        const isBrandValid =
          catId === "plywood" || catId === "mdf"
            ? selectedBrandObj.category === "plywood_mdf"
            : selectedBrandObj.category === catId;

        if (!isBrandValid) {
          brandParam = "";
        }
      }
    }

    if (catId === "all") {
      navigate(`/products${brandParam}`);
    } else {
      navigate(`/products/category/${catId}${brandParam}`);
    }
  };

  // Get brands that are valid for the active category
  const filteredBrandsForDropdown = useMemo(() => {
    if (activeCategoryFilter === "all") return BRANDS;
    return BRANDS.filter((br) => {
      if (
        activeCategoryFilter === "plywood" ||
        activeCategoryFilter === "mdf"
      ) {
        return br.category === "plywood_mdf";
      }
      return br.category === activeCategoryFilter;
    });
  }, [activeCategoryFilter]);

  const handleClearBrandFilter = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("brand");
      setSearchParams(newParams);
      setIsLoading(false);
    }, 450);
  };

  // Filter Products based on search query, active category and active brand
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        activeCategoryFilter === "all" || p.category === activeCategoryFilter;

      const matchesBrand =
        !brandFilter ||
        (p.brand && p.brand.toLowerCase() === brandFilter.toLowerCase());

      return matchesSearch && matchesCat && matchesBrand;
    });
  }, [products, searchQuery, activeCategoryFilter, brandFilter]);

  return (
    <div className="animate-fadeIn min-h-[80vh] py-12 bg-slate-50 relative">
      {isLoading && <CentralTransitionLoader />}
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

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Architectural Materials Explorer
          </h1>
          <p className="text-slate-600 mt-2">
            Explore 12 supreme-quality carpentry items, structured across our
            six premium divisions. Select a material to dive deep into custom
            thickness variants, spec sheets, and technical parameters.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6 mb-10">
          {/* Row 1: Search & Active state */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:max-w-2xl">
              {/* Search Box */}
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-3.5 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search plywood, soft hinges, adhesives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-800"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsLoading(false);
                      }, 400);
                    }}
                    className="absolute right-3.5 top-3.5 text-xs bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded hover:bg-slate-300 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
              {/* Brand Filter Dropdown */}
              <div className="relative shrink-0 flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0">
                  <select
                    value={brandFilter || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setIsLoading(true);
                      setTimeout(() => {
                        const newParams = new URLSearchParams(searchParams);
                        if (val) {
                          newParams.set("brand", val);
                        } else {
                          newParams.delete("brand");
                        }
                        setSearchParams(newParams);
                        setIsLoading(false);
                      }, 500);
                    }}
                    className="w-full sm:w-[200px] pl-4 pr-10 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-amber-500 focus:bg-white text-slate-700 transition-all cursor-pointer appearance-none"
                  >
                    <option value="">All Brands</option>
                    {filteredBrandsForDropdown.map((br) => (
                      <option key={br.id} value={br.id}>
                        {br.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>

                {brandFilter && (
                  <button
                    onClick={handleClearBrandFilter}
                    className="px-3.5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white transition-all cursor-pointer text-xs font-bold flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                    title="Clear Brand Filter"
                  >
                    <span>Clear Brand</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="text-xs text-slate-500 font-bold">
              Showing {filteredProducts.length} premium products
            </div>
          </div>

          {/* Row 2: Category Badges */}
          <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveCategoryFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategoryFilter === "all"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    activeCategoryFilter === cat.id
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  <CatIcon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Laminates Catalog Explorer */}
        {activeCategoryFilter === "laminates" && (
          <div className="mb-12 p-8 rounded-3xl bg-slate-950 text-white border border-slate-900 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="max-w-2xl">
                <span className="px-3 py-1 bg-amber-500 text-slate-950 font-black text-[10px] rounded-full uppercase tracking-widest">
                  Official Brand Partner Collections
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-3">
                  Browse 2,000+ Decorative Laminate Designs
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  We are authorized direct distributors for India's leading
                  laminate brands. Because each partner manufacturer maintains
                  massive portfolios of 2,000+ exquisite designs, we encourage
                  you to browse their official, live catalogs to view the
                  complete range.
                </p>
                <p className="text-xs text-amber-400 font-extrabold mt-3 border-l-2 border-amber-500 pl-3">
                  How to Order: Pick any laminate code/name from their catalogs,
                  click "Full Specs & Inquiry" on any item, and send it to our
                  WhatsApp. We will deliver it directly to your site at
                  best-in-market rates!
                </p>
              </div>

              {/* Brand Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
                {[
                  {
                    brandId: "century-laminates",
                    catalogUrl: "https://www.centuryply.com/laminates",
                    designs: "2,000+ Designs",
                    tagline: "Lucida Gloss & ViroKill Tech",
                  },
                  {
                    brandId: "greenlam",
                    catalogUrl: "https://www.greenlam.co.in",
                    designs: "2,500+ Designs",
                    tagline: "Global Textures & Antimicrobial",
                  },
                  {
                    brandId: "newmika",
                    catalogUrl: "https://www.newmika.com",
                    designs: "1,500+ Designs",
                    tagline: "Trendsetting Suede & Gloss",
                  },
                  {
                    brandId: "ivas",
                    catalogUrl: "https://www.ivas.homes/laminates/",
                    designs: "1,000+ Designs",
                    tagline: "90° Bendable PVC & Pastels",
                  },
                ].map((item) => {
                  const brandInfo =
                    BRANDS.find((b) => b.id === item.brandId) || {};
                  return (
                    <div
                      key={item.brandId}
                      className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-amber-500/30 transition-all group"
                    >
                      <div className="space-y-4">
                        <div className="h-12 w-full bg-white rounded-lg p-1.5 flex items-center justify-center">
                          <img
                            src={brandInfo.logo}
                            alt={brandInfo.name || item.brandId}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                              {brandInfo.name || item.brandId}
                            </h4>
                            <span className="text-[9px] font-black uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                              {item.designs}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 font-semibold">
                            {item.tagline}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-2 leading-relaxed line-clamp-2">
                            {brandInfo.description}
                          </p>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/918072808083?text=${encodeURIComponent(
                          `Hello RJ Plywood & Hardwares,

I am interested in inquiring about *${brandInfo.name || item.brandId}* laminates for my interior work. 

Could you please share:
1. The latest design catalog/brochure for this brand.
2. Price list details and any volume/builder discounts.
3. Availability and delivery estimates to my site.

Thank you!`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white hover:text-slate-950 font-extrabold text-[11px] transition-all flex items-center justify-center gap-1.5 border border-green-700 hover:border-transparent cursor-pointer shadow-lg hover:shadow-green-500/20"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Enquire with Us</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {activeCategoryFilter !== "laminates" &&
          (filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* Visual Top */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ${
                        prod.category === "hardware" ||
                        prod.category === "adhesives"
                          ? "p-6"
                          : ""
                      }`}
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/90 text-amber-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {prod.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-slate-700 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{prod.rating}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold text-slate-900 leading-snug line-clamp-1 group-hover:text-amber-500 transition-colors">
                        {prod.name}
                      </h2>
                      <p className="text-xs text-amber-600 font-semibold">
                        {prod.tagline}
                      </p>
                      <p className="text-sm text-slate-600 line-clamp-3">
                        {prod.description}
                      </p>

                      {/* Specifications List Snip */}
                      <div className="pt-3 flex flex-col gap-1.5 text-xs text-slate-500">
                        {Object.entries(prod.specs)
                          .slice(0, 2)
                          .map(([key, value]) => (
                            <div
                              key={key}
                              className="flex justify-between border-b border-dashed border-slate-100 pb-1"
                            >
                              <span className="font-semibold text-slate-400">
                                {key}:
                              </span>
                              <span className="text-slate-700 font-medium truncate max-w-[150px]">
                                {value}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* Thickness Badges if they exist */}
                      {prod.thicknesses && (
                        <div className="pt-3">
                          <span className="block text-xs font-semibold text-slate-400 mb-1">
                            Thickness Options:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {prod.thicknesses.map((th, index) => (
                              <span
                                key={index}
                                className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100"
                              >
                                {th}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Primary Action */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end">
                      <Link
                        to={`/products/${prod.id}`}
                        className="px-4 py-2.5 rounded-xl bg-slate-950 text-white group-hover:bg-amber-500 group-hover:text-slate-950 font-bold text-xs transition-all flex items-center gap-1 shadow-sm text-center"
                      >
                        <span>Full Specs &amp; Inquiry</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl max-w-lg mx-auto">
              <Info className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900">
                No products match your query
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Try adjusting your filters or search keywords, or reset the
                query to discover all items.
              </p>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setSearchQuery("");
                    setActiveCategoryFilter("all");
                    setSearchParams(new URLSearchParams());
                    setIsLoading(false);
                  }, 800);
                }}
                className="mt-6 px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          ))}

        {/* Professional Bulk Order CTA banner */}
        <div className="mt-20 p-8 rounded-3xl bg-slate-950 text-white border border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-full uppercase tracking-widest">
              Contractors &amp; Builders Special
            </span>
            <h3 className="text-xl font-bold">
              Need Bulk Materials for large commercial properties?
            </h3>
            <p className="text-sm text-slate-400">
              Enjoy dedicated freight delivery, customized volume-based
              discounts, and flexible priority lines.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm tracking-wide shrink-0 text-center"
          >
            Inquire Bulk Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
