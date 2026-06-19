import { ShieldCheck, Award, Users } from "lucide-react";

export default function AboutPage({ timeline, brands }) {
  return (
    <div className="animate-fadeIn py-16 bg-slate-50 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Header Hero block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-900">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Our Heritage of Precision
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Honest Quality, Authentic Timbers.
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Founded in Madurai, RJ Plywood &amp; Hardwares began with a single
              promise: providing carpenters and home designers with wood
              substrates that do not buckle, sag, or decay. Over two decades, we
              have evolved into Madurai's premium dealer for high-spec
              materials.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <div>
                <span className="block text-2xl font-black text-amber-400">
                  19+ Years
                </span>
                <span className="text-xs text-slate-400 font-bold">
                  Unmatched Trust
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-400">
                  10,000+
                </span>
                <span className="text-xs text-slate-400 font-bold">
                  Residences Renovated
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[300px] relative">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800"
              alt="Deep Wood Planks"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-950 via-transparent to-transparent" />
          </div>
        </div>

        {/* 2. Core Values Block */}
        <div className="mb-20 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Our Pillars of Strength
            </h2>
            <p className="text-2xl font-bold text-slate-900">
              Core Beliefs That Drive Our Operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "No-Compromise Authenticity",
                desc: "If we sell a sheet as 100% Gurjan Core BWP, we stand by it. Every wood veneer ply thickness is calibrated down to fractions of a millimeter.",
              },
              {
                icon: Award,
                title: "Sustainable Sourcing",
                desc: "We prioritize mills that harvest timber using certified sustainable ecological practices, preserving Indian and fumed global wood basins.",
              },
              {
                icon: Users,
                title: "Carpenter Partnership",
                desc: "We hold direct instructional and skill development workshops for carpenters, introducing them to advanced soft-close kitchen hardware.",
              },
            ].map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                    <ValIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Timeline (2005 - 2024) */}
        <div className="mb-20 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Heritage Timeline
            </h2>
            <p className="text-2xl font-bold text-slate-900">
              Journey of RJ Plywood &amp; Hardwares
            </p>
          </div>

          <div className="relative border-l-2 border-amber-300 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12 py-4">
            {timeline.map((event, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black border-4 border-slate-50 shadow group-hover:scale-110 transition-transform">
                  •
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-950 text-amber-400 text-[10px] font-extrabold uppercase tracking-widest mb-2">
                    Year {event.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Brand Partnerships showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Authorized Distributors
            </h2>
            <p className="text-xl font-bold text-slate-900">
              Our National &amp; Global Brand Partners
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover filter transition-all"
                  />
                </div>
                <span className="text-xs font-bold text-slate-700">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
