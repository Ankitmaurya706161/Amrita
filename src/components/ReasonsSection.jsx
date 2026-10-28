import React, { useState } from 'react';
import { Heart, Sparkles, Sun, Smile, Coffee, Star, Shield, Gem, RotateCw } from 'lucide-react';
import { config } from '../config';

export default function ReasonsSection() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getReasonIcon = (iconName) => {
    const props = { size: 24, className: 'text-gold-300' };
    switch (iconName) {
      case 'smile':
        return <Smile {...props} />;
      case 'heart':
        return <Heart {...props} className="text-rose-400 fill-rose-500/50" />;
      case 'sun':
        return <Sun {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'coffee':
        return <Coffee {...props} />;
      case 'star':
        return <Star {...props} />;
      case 'shield':
        return <Shield {...props} />;
      case 'gem':
        return <Gem {...props} />;
      default:
        return <Heart {...props} />;
    }
  };

  const cards = config.reasonsWhy.cards;
  const flippedCount = Object.values(flippedCards).filter(Boolean).length;

  return (
    <section id="reasons" className="py-24 px-4 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sapphire-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
            <Heart size={14} className="text-rose-400 fill-rose-400" />
            <span>8 Special Reasons</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wide mb-3">
            {config.reasonsWhy.title}
          </h2>
          <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto mb-6">
            {config.reasonsWhy.subtitle}
          </p>

          {/* Progress Tracker Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-midnight-900/80 border border-gold-400/35 text-xs text-cream-200">
            <Sparkles size={14} className="text-gold-400" />
            <span>Reasons Discovered: <strong className="text-gold-300 font-semibold">{flippedCount} / {cards.length}</strong></span>
            {flippedCount === cards.length && (
              <span className="text-gold-300 font-medium ml-1">🎉 You are my entire world!</span>
            )}
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const isFlipped = !!flippedCards[card.id];

            return (
              <div
                key={card.id}
                className="perspective-1000 h-72 sm:h-80 cursor-pointer select-none"
                onClick={() => toggleCard(card.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT FACE in Royal Midnight Blue */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl p-6 glass-card glass-card-hover border-2 border-gold-400/35 flex flex-col justify-between shadow-xl bg-gradient-to-br from-midnight-900/90 via-[#0A1438]/85 to-midnight-950/95">
                    {/* Top bar with number and heart */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xs font-bold text-gold-400/90 tracking-widest">
                        REASON {card.number}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-sapphire-800/60 border border-gold-400/30 flex items-center justify-center">
                        <Heart size={14} className="text-rose-400 fill-rose-500/50" />
                      </div>
                    </div>

                    {/* Middle Icon and Reason Title */}
                    <div className="text-center my-auto flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sapphire-800/80 to-sapphire-700/60 border border-gold-400/40 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(246,215,125,0.25)]">
                        {getReasonIcon(card.icon)}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white leading-snug">
                        {card.front}
                      </h3>
                    </div>

                    {/* Bottom Hint */}
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gold-300/80 pt-2 border-t border-white/5">
                      <RotateCw size={12} />
                      <span>Tap to reveal</span>
                    </div>
                  </div>

                  {/* BACK FACE in Deep Midnight Velvet */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 border-2 border-gold-400/50 flex flex-col justify-between shadow-2xl bg-gradient-to-br from-[#0D1B48] via-[#081232] to-[#030718]">
                    {/* Top indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-celestial-300 font-semibold">
                        Why Amrita is Special
                      </span>
                      <Heart size={16} className="text-rose-400 fill-rose-400" />
                    </div>

                    {/* Detailed message */}
                    <div className="my-auto py-2">
                      <p className="font-cormorant text-base sm:text-lg text-cream-100 leading-relaxed italic text-center">
                        "{card.back}"
                      </p>
                    </div>

                    {/* Bottom sign */}
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-celestial-200/60 pt-2 border-t border-white/10">
                      <Sparkles size={12} className="text-gold-400" />
                      <span>Always in my heart</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
