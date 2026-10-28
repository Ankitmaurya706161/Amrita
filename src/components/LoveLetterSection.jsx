import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Feather, Eye, RefreshCw } from 'lucide-react';
import { config } from '../config';

export default function LoveLetterSection() {
  const fullText = config.loveLetter.paragraphs.join('\n\n');
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const letterRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedLength(fullText.length);
      setIsFullyRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFullyRevealed && displayedLength === 0) {
          setIsTyping(true);
        }
      },
      { threshold: 0.25 }
    );

    if (letterRef.current) {
      observer.observe(letterRef.current);
    }

    return () => observer.disconnect();
  }, [fullText.length, isFullyRevealed, displayedLength]);

  useEffect(() => {
    if (!isTyping || isFullyRevealed) return;

    const interval = setInterval(() => {
      setDisplayedLength((prev) => {
        if (prev >= fullText.length) {
          setIsFullyRevealed(true);
          setIsTyping(false);
          clearInterval(interval);
          return fullText.length;
        }
        return prev + 2;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [isTyping, isFullyRevealed, fullText.length]);

  const handleRevealAll = () => {
    setDisplayedLength(fullText.length);
    setIsFullyRevealed(true);
    setIsTyping(false);
  };

  const handleReplay = () => {
    setDisplayedLength(0);
    setIsFullyRevealed(false);
    setIsTyping(true);
  };

  const displayedText = fullText.slice(0, displayedLength);
  const displayedParagraphs = displayedText.split('\n\n');

  return (
    <section id="love-letter" ref={letterRef} className="py-24 px-4 relative overflow-hidden">
      {/* Ambient background glow in sapphire & gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sapphire-700/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
            <Feather size={14} className="text-gold-400" />
            <span>Digital Love Letter</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wide mb-3">
            {config.loveLetter.title}
          </h2>
          <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto">
            {config.loveLetter.subtitle}
          </p>
        </div>

        {/* Letter Container in Royal Sapphire Parchment */}
        <div className="relative rounded-3xl p-6 sm:p-12 md:p-16 border-2 border-gold-400/40 shadow-[0_25px_70px_rgba(2,5,14,0.9)] backdrop-blur-xl bg-gradient-to-b from-[#0A1438]/95 via-[#0E1D4E]/90 to-[#060D24]/98 text-cream-100 transition-all duration-500">
          {/* Inner Golden Filigree Border */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold-400/25 pointer-events-none"></div>

          {/* Corner Ornaments */}
          <div className="absolute top-5 left-5 text-gold-400/70 font-serif text-lg pointer-events-none">✦</div>
          <div className="absolute top-5 right-5 text-gold-400/70 font-serif text-lg pointer-events-none">✦</div>
          <div className="absolute bottom-5 left-5 text-gold-400/70 font-serif text-lg pointer-events-none">✦</div>
          <div className="absolute bottom-5 right-5 text-gold-400/70 font-serif text-lg pointer-events-none">✦</div>

          {/* Royal Wax Seal at the Top */}
          <div className="relative -top-10 sm:-top-16 mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-sapphire-900 via-sapphire-700 to-gold-500 border-2 border-gold-400/70 shadow-[0_0_30px_rgba(246,215,125,0.45)] flex items-center justify-center mb-2">
            <Heart size={28} className="fill-rose-500 text-gold-300 animate-pulse-subtle" />
          </div>

          {/* Attached Romantic Polaroid Photo of Amrita */}
          <div className="flex justify-center sm:justify-end mb-6 sm:-mt-8 sm:mb-4">
            <div className="relative rotate-2 hover:rotate-0 transition-transform duration-300 w-36 sm:w-44 p-2 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-gold-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black mb-1.5">
                <img
                  src={config.loveLetter.photo}
                  alt="My Amrita"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-script text-base sm:text-lg text-gold-300 font-normal">
                Meri Pyaari Amrita ❤️
              </p>
            </div>
          </div>

          {/* Letter Controls Toolbar */}
          <div className="flex items-center justify-between border-b border-gold-400/20 pb-4 mb-8 text-xs text-celestial-200/60">
            <span className="flex items-center gap-1.5 text-gold-300 font-medium">
              <Sparkles size={13} />
              {config.loveLetter.date}
            </span>
            <div className="flex items-center gap-2">
              {!isFullyRevealed && (
                <button
                  onClick={handleRevealAll}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/15 hover:bg-gold-400/30 text-gold-300 border border-gold-400/35 transition-all text-xs"
                  title="Reveal complete letter immediately"
                >
                  <Eye size={13} />
                  <span>Reveal Instantly</span>
                </button>
              )}
              {isFullyRevealed && (
                <button
                  onClick={handleReplay}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-cream-200/80 border border-white/10 transition-all text-xs"
                  title="Watch typewriter again"
                >
                  <RefreshCw size={13} />
                  <span>Replay</span>
                </button>
              )}
            </div>
          </div>

          {/* Salutation */}
          <div className="mb-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text tracking-wide">
              {config.loveLetter.salutation}
            </h3>
          </div>

          {/* Letter Body with Typewriter */}
          <div className="space-y-4 font-cormorant text-lg sm:text-2xl text-cream-100/95 leading-relaxed sm:leading-loose tracking-wide">
            {displayedParagraphs.map((para, index) => (
              <p
                key={index}
                className={
                  para.startsWith('Happy Karwa Chauth') || para.includes('Aaj chaand')
                    ? 'font-medium text-gold-200 italic'
                    : ''
                }
              >
                {para}
              </p>
            ))}

            {isTyping && !isFullyRevealed && (
              <span className="inline-block w-2 h-5 bg-gold-400 ml-1 animate-pulse"></span>
            )}
          </div>

          {/* Closing & Handwritten Signature */}
          <div className="mt-12 pt-6 border-t border-gold-400/20 flex flex-col items-end">
            <p className="font-serif italic text-base sm:text-lg text-celestial-200/80">
              {config.loveLetter.closing}
            </p>
            <p className="font-script text-3xl sm:text-5xl gold-gradient-text mt-2 tracking-wide font-normal drop-shadow-[0_2px_12px_rgba(246,215,125,0.4)]">
              {config.loveLetter.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
