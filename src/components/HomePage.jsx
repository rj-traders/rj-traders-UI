import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Award,
  Truck,
  Users,
} from "lucide-react";
import HeroSection from "./HeroSection";

export default function HomePage({ categories, products, testimonials }) {
  const navigate = useNavigate();
  const [stats] = useState({
    clients: 10000,
    projects: 500,
    years: 19,
    materials: 1200,
  });

  // Filter 3 best seller products for home
  const bestSellers = useMemo(() => {
    return products.slice(0, 3);
  }, [products]);

  return (
    <div className="animate-fadeIn">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. LIVE STATISTICS STRIP */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 py-10 relative z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-orange-400/30">
            <div className="pt-4 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-black tracking-tight">
                {stats.clients.toLocaleString()}+
              </span>
              <span className="block text-xs sm:text-sm uppercase font-extrabold tracking-wider opacity-85 mt-1">
                Happy Clients Served
              </span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-black tracking-tight">
                {stats.projects}+
              </span>
              <span className="block text-xs sm:text-sm uppercase font-extrabold tracking-wider opacity-85 mt-1">
                Premium Interior Projects
              </span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-black tracking-tight">
                {stats.years}+ Years
              </span>
              <span className="block text-xs sm:text-sm uppercase font-extrabold tracking-wider opacity-85 mt-1">
                Industry Leadership
              </span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-black tracking-tight">
                {stats.materials}+ SKUs
              </span>
              <span className="block text-xs sm:text-sm uppercase font-extrabold tracking-wider opacity-85 mt-1">
                Ready Inventory Items
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES (INTERACTIVE) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
              Our Core Specialties
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              A Wide Spectrum of Premium Architectural Materials
            </p>
            <p className="text-slate-600 mt-4">
              We source and inspect every bundle of wood, laminate sheets, and
              hardware components to guarantee failure-free luxury interior
              installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    navigate(`/products/category/${cat.id}`);
                  }}
                  className="group relative bg-slate-50 hover:bg-slate-950 border border-slate-100 hover:border-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Decorative faint category back text */}
                  <span className="absolute right-4 bottom-4 text-slate-200/50 group-hover:text-slate-900/40 text-7xl font-extrabold tracking-tight select-none pointer-events-none uppercase transition-colors">
                    {cat.id.slice(0, 3)}
                  </span>

                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 group-hover:bg-amber-500 text-amber-600 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-slate-600 group-hover:text-slate-400 mt-2 transition-colors">
                        Highly refined structural {cat.name} made to withstand
                        the test of time, moisture, and wear.
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-400 transition-colors pt-2">
                      <span>Browse Products</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US INFOGRAPHIC */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
                The RJ Shield of Trust
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Why Top Architects &amp; Carpenters Swear by RJ Plywood
              </p>
              <p className="text-slate-400 leading-relaxed">
                We don’t just sell sheets of plywood and drawers glides; we
                provide structural security. For over 19 years, our focus has
                been zero compromise on specifications, honest pricing, and
                friendly advice.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 font-bold text-sm hover:border-slate-700 transition-all"
                >
                  Learn Our Full Heritage
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Calibrated Guarantee",
                  desc: "Every ply sheet goes through high-pressure calibrated rollers ensuring perfect uniform thickness. Zero warp or core gaps.",
                },
                {
                  icon: Award,
                  title: "Grade Certification",
                  desc: "Our BWP (Boiling Water Proof) and MR (Moisture Resistant) ratings are certified. We offer genuine Gurjan logs and premium resins.",
                },
                {
                  icon: Truck,
                  title: "Rapid Site Delivery",
                  desc: "Equipped with our own transit fleet, we ensure damage-free materials reach your construction site exactly when required.",
                },
                {
                  icon: Users,
                  title: "Expert Consultation",
                  desc: "Our dedicated staff assists you in selecting the correct thickness, polish capabilities, and hardware cycle ratings.",
                },
              ].map((box, index) => {
                const BoxIcon = box.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                      <BoxIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {box.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {box.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEST SELLING PRODUCTS (TRENDING PREVIEW) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
                Our Highly Demanded
              </h2>
              <p className="text-3xl font-black text-slate-900 tracking-tight">
                Best-Selling Materials
              </p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-amber-500 hover:text-amber-600 text-slate-700 font-bold text-sm bg-white transition-all animate-fadeIn"
            >
              <span>View All Products</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-950 text-amber-400 rounded-full shadow-md">
                      Best Seller
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{prod.rating}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-amber-600">
                      {prod.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 italic mt-0.5">
                      {prod.tagline}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 line-clamp-2">
                      {prod.description}
                    </p>

                    {/* Thickness display if plywood */}
                    {prod.thicknesses && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        <span className="text-xs text-slate-400 font-semibold self-center mr-1">
                          Thick:
                        </span>
                        {prod.thicknesses.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pricing and Button */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-slate-400 font-medium">
                        Starting from
                      </span>
                      <span className="text-xl font-black text-slate-900">
                        ₹{prod.basePrice}
                        <span className="text-xs font-medium text-slate-500">
                          /{prod.unit}
                        </span>
                      </span>
                    </div>
                    <Link
                      to={`/products/${prod.id}`}
                      className="px-4 py-2.5 rounded-lg bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs transition-colors flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Voices of Satifaction
            </h2>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              What Our Partners &amp; Clients Say
            </p>
            <p className="text-slate-600 mt-4">
              Read authentic feedback from custom kitchen designers, architects,
              and direct home builders who depend daily on RJ Plywood.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 italic leading-relaxed">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200/60">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {test.name}
                    </h4>
                    <p className="text-xs text-amber-600 font-semibold">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HIGH CONVERSION CTA PANEL */}
      <section className="bg-slate-950 py-20 text-white relative overflow-hidden">
        {/* Colorful Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Planning a Premium Home renovation?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get absolute expert guidance. Send us your floor plan or carpentry
            cutting list. We will provide a completely itemized high-accuracy
            budget quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold shadow-lg hover:opacity-95 transition-all text-center"
            >
              Request Free Budget Quote
            </Link>
            <a
              href="https://wa.me/918072808083"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Quick WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
