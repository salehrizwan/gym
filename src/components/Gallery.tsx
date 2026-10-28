import React, { useState, useEffect } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/gymData';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Heavy Iron', 'Conditioning', 'Facility'];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-white border-t border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest text-black uppercase mb-2">
              05 · The Iron Floor
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950 tracking-tight">
              INSIDE THE <span className="underline decoration-black decoration-4">TRAINING SANCTUARY</span>
            </h2>
          </div>
          
          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-lg border border-neutral-300 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-xl overflow-hidden border border-neutral-200 hover:border-black cursor-pointer aspect-[4/3] bg-neutral-100 transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay with Preview affordance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75 duration-200 shadow-md">
                <Eye className="w-4 h-4 text-black" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                  {item.category}
                </div>
                <h3 className="text-base font-bold text-white mt-0.5 truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/20 hover:bg-white text-black hover:text-black transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6 text-white hover:text-black" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center max-w-xl">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                {filteredItems[lightboxIndex].category} · {lightboxIndex + 1} of {filteredItems.length}
              </div>
              <h4 className="text-lg font-bold text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-neutral-300 mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
