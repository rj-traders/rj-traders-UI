import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ChevronRight, CheckCircle, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Background Graphic Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Diagonal Line Grid styling */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mx-auto lg:mx-0">
              <Award className="w-4 h-4 text-amber-500 animate-spin-slow" />
              <span>The Standard of Trust &amp; Luxury</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Shape Your Dream Interiors with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 drop-shadow-sm">
                Ultimate Perfection
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Madurai’s supreme destination for high-density calibrated marine plywood, exotic natural veneers, custom pre-laminated MDF, and luxury soft-close architectural hardware.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Product Catalog</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-base hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get Instant Quote</span>
              </Link>
            </div>


            {/* Bullet Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/60 text-left">
              {[
                { title: 'Zero Core Gap Plywood', desc: 'Calibrated perfectly' },
                { title: 'BWP Waterproof Class', desc: 'Marine certified' },
                { title: 'Exotic Natural Finishes', desc: 'Premium Teak & Oak' }
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-sm font-bold text-slate-100">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none">
              {/* Decorative glowing background rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-3xl rotate-6 opacity-10 blur-xl scale-105" />

              {/* Main stack cards illustration */}
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-3xl shadow-2xl space-y-6">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600"
                    alt="Luxury Plywood Texture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-amber-500/95 text-slate-950 font-bold text-[10px] uppercase tracking-wider">Sustainable Sourcing</span>
                    <span className="text-white font-extrabold text-sm flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 Rating
                    </span>
                  </div>
                </div>

                {/* Trust highlight row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <p className="text-2xl font-black text-amber-400">100%</p>
                    <p className="text-xs text-slate-400 font-medium">BWP Gurjan Core</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <p className="text-2xl font-black text-amber-400">25 Yrs</p>
                    <p className="text-xs text-slate-400 font-medium">Full Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
