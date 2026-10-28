import React from 'react';
import { Heart, ArrowUp, Moon } from 'lucide-react';
import { config } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 border-t border-gold-400/25 bg-midnight-950/90 backdrop-blur-md relative z-20 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Glowing Heart & Moon Emblem */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-sapphire-900 to-sapphire-800 border border-gold-400/40 flex items-center justify-center text-gold-300 mb-5 shadow-[0_0_20px_rgba(246,215,125,0.3)]">
          <Moon size={22} className="text-gold-300" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text tracking-wide mb-2">
          {config.mainTagline}
        </h3>

        <p className="font-cormorant italic text-base sm:text-xl text-celestial-200/80 mb-6 max-w-lg">
          "Chaand har saal aayega, lekin tumhare saath har pal hamesha meri favorite memory rahega."
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-gold-400/20 border border-gold-400/35 text-xs sm:text-sm text-gold-300 transition-all mb-8 hover:scale-105"
        >
          <ArrowUp size={14} />
          <span>Back to the Top 🌙</span>
        </button>

        {/* Credits Note */}
        <div className="pt-6 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-celestial-300/50 gap-3">
          <p>
            Made exclusively for <span className="text-gold-300 font-medium">{config.girlfriendName}</span> with eternal love by <span className="text-gold-300 font-medium">{config.boyfriendName}</span>
          </p>
          <p className="flex items-center gap-1">
            <span>{config.occasion}</span>
            <span>•</span>
            <span>Forever &amp; Always</span>
            <Heart size={12} className="fill-rose-500 text-rose-500 inline ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}
