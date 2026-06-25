import { useState, useMemo } from "react";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Search, Star, Info, ChevronRight, X } from "lucide-react";

export default function ProductsPage({ categories, products }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategoryFilter = categoryId || "all";
  const brandFilter = searchParams.get("brand");

  const setActiveCategoryFilter = (catId) => {
    const brandParam = brandFilter ? `?brand=${brandFilter}` : "";
    if (catId === "all") {
      navigate(`/products${brandParam}`);
    } else {
      navigate(`/products/category/${catId}${brandParam}`);
    }
  };

  const handleClearBrandFilter = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("brand");
    setSearchParams(newParams);
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
        !brandFilter || (p.brand && p.brand.toLowerCase() === brandFilter.toLowerCase());

      return matchesSearch && matchesCat && matchesBrand;
    });
  }, [products, searchQuery, activeCategoryFilter, brandFilter]);

  return (
    <div className="animate-fadeIn min-h-[80vh] py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Architectural Materials Explorer
          </h1>
          <p className="text-slate-600 mt-2">
            Explore 12 supreme-quality carpentry items, structured across our
            six premium divisions. Select a material to dive deep into custom
            thickness variants, spec sheets, and price metrics.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6 mb-10">
          {/* Row 1: Search & Active state */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
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
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3 text-xs bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded hover:bg-slate-300"
                >
                  Clear
                </button>
              )}
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

          {/* Row 3: Active Brand Filter Status */}
          {brandFilter && (
            <div className="flex items-center gap-3 p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs font-bold text-amber-800 animate-fadeIn">
              <span className="flex items-center gap-1">
                <span>Filtering by Brand:</span>
                <span className="uppercase text-slate-950 bg-amber-500/20 px-2 py-0.5 rounded text-[10px]">
                  {brandFilter}
                </span>
              </span>
              <button
                onClick={handleClearBrandFilter}
                className="flex items-center gap-1 px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 hover:text-white rounded-lg transition-all cursor-pointer text-[10px] shadow-sm"
              >
                <span>Clear Brand</span>
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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

                  {/* Price & Primary Action */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                        Starting Price
                      </span>
                      <span className="text-lg font-black text-slate-900">
                        ₹{prod.basePrice}
                        <span className="text-xs font-medium text-slate-500">
                          /{prod.unit}
                        </span>
                      </span>
                    </div>

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
              Try adjusting your filters or search keywords, or reset the query
              to discover all items.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategoryFilter("all");
              }}
              className="mt-6 px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

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
