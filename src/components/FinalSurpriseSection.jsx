import React, { useState } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { config } from '../config';

export default function FinalSurpriseSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  return (
    <section id="final-surprise" className="py-24 px-4 relative overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-sapphire-600/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
          <Gift size={14} className="text-gold-400" />
          <span>The Grand Finale</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wide mb-3">
          {config.finalSurprise.title}
        </h2>

        <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto mb-10">
          A secret note sealed with all my love, to be opened only under tonight's moon.
        </p>

        {/* 3D Envelope Presentation */}
        <div className="relative max-w-lg mx-auto my-8">
          {!isOpen ? (
            /* Closed Envelope View */
            <div className="glass-card p-8 sm:p-12 rounded-3xl border-2 border-gold-400/40 shadow-[0_20px_60px_rgba(2,5,14,0.9)] flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="w-32 h-24 sm:w-40 sm:h-28 rounded-2xl bg-gradient-to-tr from-sapphire-900 to-sapphire-800 border-2 border-gold-400/50 shadow-2xl flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-300 shadow-md">
                  <Heart size={22} className="fill-rose-500 text-gold-300 animate-pulse" />
                </div>
              </div>

              <p className="font-serif italic text-lg sm:text-xl text-gold-200 mb-6">
                "{config.finalSurprise.envelopeText}"
              </p>

              {/* Action Button */}
              <button
                onClick={handleOpenEnvelope}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-serif font-bold text-base sm:text-lg text-sapphire-950 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 shadow-[0_0_35px_rgba(246,215,125,0.45)] hover:shadow-[0_0_55px_rgba(246,215,125,0.75)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Sparkles size={20} className="text-sapphire-950 group-hover:rotate-12 transition-transform" />
                <span>{config.finalSurprise.buttonText}</span>
              </button>
            </div>
          ) : (
            /* Open Letter View in Sapphire Parchment */
            <div className="glass-card p-6 sm:p-12 rounded-3xl border-2 border-gold-400/50 shadow-[0_25px_70px_rgba(2,5,14,0.95)] bg-gradient-to-b from-[#0A1438]/95 via-[#0E1D4E]/92 to-[#040819]/98 animate-fade-in text-left relative">
              <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold-400/25 pointer-events-none"></div>

              {/* Header Seal */}
              <div className="flex items-center justify-between border-b border-gold-400/20 pb-4 mb-6">
                <span className="font-serif text-sm font-semibold gold-gradient-text tracking-wider uppercase">
                  From Ankit's Heart
                </span>
                <Heart size={20} className="fill-rose-500 text-gold-300 animate-pulse" />
              </div>

              {/* Revealed Romantic Couple Photo inside the letter */}
              <div className="my-6 p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-gold-400/40 shadow-xl max-w-sm mx-auto">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-black mb-2">
                  <img
                    src={config.finalSurprise.couplePhoto}
                    alt="Ankit & Amrita"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-cormorant italic text-sm text-gold-300">
                  "Hamesha tumhara, Ankit ❤️"
                </p>
              </div>

              {/* Letter Paragraphs */}
              <div className="space-y-4 font-cormorant text-lg sm:text-2xl text-cream-100/95 leading-relaxed sm:leading-loose">
                {config.finalSurprise.letterText.map((line, idx) => (
                  <p
                    key={idx}
                    className={
                      line.startsWith('Amrita')
                        ? 'font-serif text-2xl sm:text-3xl font-bold gold-gradient-text'
                        : line.startsWith('With all my love') || line.startsWith('Ankit')
                        ? 'font-script text-3xl sm:text-4xl text-gold-300'
                        : ''
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Final Climax Highlight Line */}
              <div className="mt-8 pt-6 border-t border-gold-400/30 text-center">
                <p className="font-serif italic text-lg sm:text-2xl text-gold-200/95 leading-relaxed drop-shadow-[0_2px_15px_rgba(246,215,125,0.35)]">
                  "{config.finalSurprise.finalLine}"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
