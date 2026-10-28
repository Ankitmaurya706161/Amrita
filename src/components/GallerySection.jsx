import React, { useState, useEffect } from 'react';
import { Camera, Heart, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { config } from '../config';

export default function GallerySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState({});

  const photos = config.gallery.photos;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikedPhotos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="memories" className="py-24 px-4 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-sapphire-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
            <Camera size={14} className="text-gold-400" />
            <span>Cherished Moments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wide mb-3">
            {config.gallery.title}
          </h2>
          <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto mb-2">
            {config.gallery.subtitle}
          </p>
          <p className="text-xs text-gold-300/70 max-w-md mx-auto italic">
            ✦ Click on any photo to view in full screen ✦
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, index) => {
            const isLiked = !!likedPhotos[photo.id];

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative cursor-pointer rounded-3xl overflow-hidden glass-card glass-card-hover border border-gold-400/25 shadow-xl transition-all duration-300"
              >
                {/* Photo Image with Hover Zoom */}
                <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-midnight-900">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-tr', 'from-sapphire-900', 'to-midnight-900');
                    }}
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/25 to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-midnight-950/80 backdrop-blur-md text-[11px] font-medium text-gold-300 border border-gold-400/35">
                      {photo.tag}
                    </span>

                    {/* Like Heart Button */}
                    <button
                      onClick={(e) => toggleLike(e, photo.id)}
                      className="w-8 h-8 rounded-full bg-midnight-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform hover:scale-110"
                      title="Favorite memory"
                    >
                      <Heart
                        size={16}
                        className={`transition-colors ${
                          isLiked
                            ? 'fill-rose-500 text-rose-500'
                            : 'text-cream-200/80 hover:text-rose-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Hover Quick Zoom Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <span className="p-3 rounded-full bg-midnight-950/85 border border-gold-400 text-gold-300 shadow-lg">
                      <ZoomIn size={22} />
                    </span>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-gold-200 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream-200/85 font-light line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Lightbox Wrapper */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute -top-12 right-0 sm:right-2 text-cream-200 hover:text-gold-300 p-2 transition-colors z-20"
              title="Close (Esc)"
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-sapphire-900/90 border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-400 hover:text-sapphire-950 transition-all z-20 shadow-lg"
              title="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-sapphire-900/90 border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-400 hover:text-sapphire-950 transition-all z-20 shadow-lg"
              title="Next Photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Card Container */}
            <div className="w-full glass-card rounded-3xl overflow-hidden border-2 border-gold-400/40 shadow-2xl flex flex-col">
              <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={photos[selectedPhotoIndex].url}
                  alt={photos[selectedPhotoIndex].title}
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Photo Caption Details Bar */}
              <div className="p-5 sm:p-6 bg-gradient-to-t from-midnight-950 to-sapphire-950/80 border-t border-gold-400/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                      {photos[selectedPhotoIndex].tag}
                    </span>
                    <span className="text-cream-300/40">•</span>
                    <span className="text-xs text-cream-300/60">
                      Photo {selectedPhotoIndex + 1} of {photos.length}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {photos[selectedPhotoIndex].title}
                  </h3>
                  <p className="text-sm text-cream-200/90 font-light mt-1">
                    {photos[selectedPhotoIndex].caption}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={(e) => toggleLike(e, photos[selectedPhotoIndex].id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sapphire-800/80 border border-gold-400/40 text-sm text-cream-100 hover:border-gold-400 transition-all shadow-md"
                  >
                    <Heart
                      size={16}
                      className={
                        likedPhotos[photos[selectedPhotoIndex].id]
                          ? 'fill-rose-500 text-rose-500'
                          : 'text-cream-200'
                      }
                    />
                    <span>{likedPhotos[photos[selectedPhotoIndex].id] ? 'Cherished' : 'Cherish'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
