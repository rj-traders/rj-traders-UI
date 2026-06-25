import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Maximize2, X, ArrowLeft } from "lucide-react";
import { GALLERY_PHOTOS } from "../data/mockData";

export default function GalleryPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredPhotos = useMemo(() => {
    return filter === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="animate-fadeIn py-16 bg-slate-50 min-h-[85vh]">
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

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Inspiration Gallery
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Behold finished interior solutions made possible using premium
            plywood, natural Burma teak wood veneers, fumed oak panel overlays,
            and soft closing mechanisms.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "kitchen", label: "Luxury Kitchens" },
            { id: "interior", label: "Warm Interiors" },
            { id: "panels", label: "CNC Wall Panels" },
            { id: "office", label: "Modern Workspaces" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                filter === btn.id
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setLightboxImage(photo.image)}
                    className="p-3 bg-white text-slate-950 rounded-full hover:scale-105 transition-transform"
                    aria-label="Zoom Image"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tag bottom */}
              <div className="p-4 flex justify-between items-center bg-white">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {photo.title}
                  </h3>
                  <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">
                    {photo.category}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxImage(photo.image)}
                  className="text-xs text-slate-400 hover:text-amber-500 font-bold"
                >
                  Inspect
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Enlarged Showcase"
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/90 hover:bg-slate-800 text-white rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
