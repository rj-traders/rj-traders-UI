import { useState, useEffect } from "react";
import rjLogoNew from "../assets/rj-logo-new.png";

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading simulation
    const interval = 15; // update every 15ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600); // Wait for transition fade out
          }, 200);
          return 100;
        }
        // Simulated ease-out style progress increase
        const remaining = 100 - prev;
        const increment = Math.max(step * (remaining / 50), 0.5);
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm px-6 text-center space-y-6">
        {/* Animated Brand Logo Container */}
        <div className="relative w-24 h-24 rounded-2xl p-0.5 bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 shadow-2xl shadow-orange-500/20 animate-bounce-slow">
          <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center p-3">
            <img
              src={rjLogoNew}
              alt="logo"
              className="w-full h-full object-contain animate-pulse-slow"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-orange-700 text-white rounded-md text-[10px] font-black tracking-wider shadow">
            RJ
          </span>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h1 className="text-2xl font-black tracking-wider text-white">
            RJ PLYWOOD
          </h1>
          <p className="text-[10px] font-extrabold tracking-[0.25em] text-amber-500 uppercase">
            &amp; Hardwares
          </p>
        </div>

        {/* Loader Progress Bar */}
        <div className="w-64 space-y-2">
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-full transition-all duration-75 ease-out shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold tracking-wider">
            <span>LOADING MATERIALS...</span>
            <span className="text-amber-500">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Decorative footer label */}
      <div className="absolute bottom-10 text-[9px] font-bold tracking-[0.3em] text-slate-600 uppercase">
        Delivered with Absolute Trust
      </div>
    </div>
  );
}

export function CentralTransitionLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 backdrop-blur-md transition-all duration-300 animate-fadeIn">
      <div className="flex flex-col items-center space-y-4">
        {/* Glow backdrop */}
        <div className="absolute w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Spinner Ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-850" />
          <div className="absolute inset-0 rounded-full border-4 border-t-amber-500 border-r-amber-500 animate-spin" />
          <div className="absolute inset-2 bg-slate-950 rounded-full flex items-center justify-center p-2">
            <img
              src={rjLogoNew}
              alt="logo"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
        </div>

        <span className="text-xs font-bold text-amber-500 tracking-[0.2em] uppercase animate-pulse">
          Loading Materials...
        </span>
      </div>
    </div>
  );
}
