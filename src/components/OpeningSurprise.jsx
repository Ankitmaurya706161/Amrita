import React, { useState } from 'react';
import { Sparkles, Moon, Heart, Volume2, VolumeX } from 'lucide-react';
import { config } from '../config';
import { romanticAudio } from '../utils/audioPlayer';

export default function OpeningSurprise({ onOpenSurprise, isOpened }) {
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleOpenClick = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      onOpenSurprise();
      setShowMusicPrompt(true);
    }, 800);
  };

  const handleMusicChoice = (playMusic) => {
    if (playMusic) {
      romanticAudio.play();
    }
    setShowMusicPrompt(false);
  };

  if (isOpened && !showMusicPrompt) return null;

  return (
    <>
      {/* Opening Full-Screen Surprise Curtain */}
      {!isOpened && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-4 transition-all duration-1000 ${
            animatingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
          }`}
          style={{
            background: 'radial-gradient(ellipse at 50% 25%, #15296D 0%, #08112D 50%, #02050E 100%)',
          }}
        >
          {/* Subtle starry background overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#F6D77D_1px,transparent_1px)] [background-size:28px_28px] opacity-30"></div>

          {/* Glowing Majestic Moon in Celestial Sapphire Sky */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Ethereal Glow Ring */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gold-400/25 blur-3xl animate-pulse-subtle"></div>
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-celestial-500/20 blur-[100px]"></div>
            
            {/* The Full Moon */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-[#FFFDF5] via-[#FDF6D8] to-[#FFFFFF] shadow-[0_0_70px_rgba(246,215,125,0.65),0_0_100px_rgba(56,189,248,0.3)] flex items-center justify-center border-2 border-gold-300/50 animate-float-slow overflow-hidden">
              {/* Moon craters / textures */}
              <div className="absolute top-6 left-8 w-8 h-8 rounded-full bg-gold-400/20 blur-[1px]"></div>
              <div className="absolute bottom-8 right-9 w-12 h-10 rounded-full bg-gold-500/15 blur-[1px]"></div>
              <div className="absolute top-16 right-7 w-6 h-6 rounded-full bg-gold-400/25 blur-[1px]"></div>
              {/* Soft crescent shadow for 3D depth */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-sapphire-950/25"></div>
            </div>

            {/* Orbiting Sparkles */}
            <div className="absolute -top-3 -right-2 text-gold-300 animate-bounce">
              <Sparkles size={28} />
            </div>
            <div className="absolute -bottom-2 -left-3 text-roseGold-300 animate-pulse">
              <Heart size={22} className="fill-roseGold-400/60" />
            </div>
          </div>

          {/* Welcome Text Content */}
          <div className="text-center max-w-xl mx-auto z-10 px-4">
            <p className="text-celestial-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-gold-400" />
              Special Karwa Chauth Surprise
              <Sparkles size={16} className="text-gold-400" />
            </p>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 gold-gradient-text tracking-wide drop-shadow-[0_4px_20px_rgba(246,215,125,0.35)]">
              {config.opening.greeting}
            </h1>

            <p className="font-cormorant italic text-lg sm:text-2xl text-cream-100/95 leading-relaxed mb-8 max-w-lg mx-auto">
              "{config.opening.message}"
            </p>

            {/* Glowing Action Button in Royal Gold */}
            <button
              onClick={handleOpenClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-serif font-bold text-base sm:text-lg text-sapphire-950 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 shadow-[0_0_35px_rgba(246,215,125,0.5),0_0_60px_rgba(56,189,248,0.25)] hover:shadow-[0_0_55px_rgba(246,215,125,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <span>{config.opening.buttonText}</span>
              <Sparkles className="w-5 h-5 text-sapphire-950 transition-transform group-hover:rotate-12" />
            </button>

            <p className="text-xs text-celestial-200/60 mt-5 font-light tracking-wider">
              Crafted with eternal love &amp; respect by {config.boyfriendName}
            </p>
          </div>
        </div>
      )}

      {/* Romantic Music Request Modal */}
      {showMusicPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sapphire-950/85 backdrop-blur-md animate-fade-in">
          <div className="glass-card max-w-md w-full p-6 sm:p-8 rounded-3xl text-center border-2 border-gold-400/40 shadow-[0_15px_60px_rgba(0,0,0,0.85)] relative">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-sapphire-800 to-sapphire-700 flex items-center justify-center border-2 border-gold-400/50 text-gold-300 shadow-[0_0_25px_rgba(246,215,125,0.4)]">
              <Volume2 size={30} className="animate-pulse" />
            </div>

            <h3 className="font-serif text-2xl font-bold gold-gradient-text mb-2">
              A Romantic Melody For You 🎶
            </h3>

            <p className="text-sm sm:text-base text-cream-100/85 mb-6 leading-relaxed">
              Meri jaan {config.girlfriendName}, would you like soft instrumental music to accompany our story and love letter?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => handleMusicChoice(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-sapphire-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(246,215,125,0.35)] transition-all"
              >
                <Volume2 size={16} />
                <span>Play Romantic Music</span>
              </button>

              <button
                onClick={() => handleMusicChoice(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm text-cream-200/80 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-gold-400/40 transition-all"
              >
                <VolumeX size={16} />
                <span>Maybe Later</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
