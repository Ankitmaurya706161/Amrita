import React, { useState } from 'react';
import { Moon, Sparkles, Heart, Eye } from 'lucide-react';
import { config } from '../config';

export default function MoonExperience() {
  const [channiActive, setChanniActive] = useState(false);
  const [viewMode, setViewMode] = useState('moon'); // 'moon' or 'couple'
  const [wishMade, setWishMade] = useState(false);
  const [shootingStar, setShootingStar] = useState(false);

  const handleMakeWish = () => {
    setShootingStar(true);
    setTimeout(() => {
      setWishMade(true);
      setShootingStar(false);
    }, 700);
  };

  return (
    <section id="moon-experience" className="py-24 px-4 relative overflow-hidden">
      {/* Night Sky Dark Gradient & Star Dust */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020612] via-[#09153D] to-[#04091A] pointer-events-none"></div>

      {/* Shooting Star Animation */}
      {shootingStar && (
        <div className="absolute top-12 left-1/4 w-52 h-0.5 bg-gradient-to-r from-transparent via-white to-gold-300 rotate-45 animate-pulse z-30 shadow-[0_0_20px_#fff]"></div>
      )}

      <div className="max-w-4xl mx-auto relative z-20 text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
          <Moon size={14} className="text-gold-400" />
          <span>Sacred Moon Ritual</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wide mb-3">
          {config.moonExperience.title}
        </h2>

        <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto mb-6">
          {config.moonExperience.subtitle}
        </p>

        {/* Ritual Mode Switcher (Moon Darshan vs Sajan Darshan) */}
        <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-sapphire-950/80 border border-gold-400/40 mb-8 shadow-lg">
          <button
            onClick={() => setViewMode('moon')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              viewMode === 'moon'
                ? 'bg-gradient-to-r from-gold-300 to-gold-400 text-sapphire-950 shadow-md font-semibold'
                : 'text-celestial-200/80 hover:text-gold-300'
            }`}
          >
            🌙 View The Moon
          </button>
          <button
            onClick={() => setViewMode('couple')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              viewMode === 'couple'
                ? 'bg-gradient-to-r from-gold-300 to-gold-400 text-sapphire-950 shadow-md font-semibold'
                : 'text-celestial-200/80 hover:text-gold-300'
            }`}
          >
            ❤️ Look At Us (Darshan)
          </button>
        </div>

        {/* Interactive Moon & Channi Centerpiece */}
        <div className="relative mx-auto max-w-md h-[360px] sm:h-[400px] flex items-center justify-center my-4">
          {/* Ethereal Moonlight Glow Aura */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gold-400/20 blur-[100px] animate-pulse-subtle pointer-events-none"></div>
          <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-celestial-500/15 blur-[80px] pointer-events-none"></div>

          {/* Central Orb: Either Full Moon OR Couple Darshan */}
          {viewMode === 'moon' ? (
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#FFFDF5] via-[#FDF6D8] to-[#FFFFFF] shadow-[0_0_90px_rgba(246,215,125,0.7),0_0_120px_rgba(56,189,248,0.3)] border-2 border-gold-200/60 flex items-center justify-center overflow-hidden transition-all duration-700">
              <div className="absolute top-10 left-12 w-10 h-10 rounded-full bg-gold-400/20 blur-[1px]"></div>
              <div className="absolute bottom-12 right-12 w-16 h-14 rounded-full bg-gold-500/15 blur-[2px]"></div>
              <div className="absolute top-20 right-10 w-8 h-8 rounded-full bg-gold-400/20 blur-[1px]"></div>
              <div className="absolute bottom-20 left-14 w-8 h-8 rounded-full bg-gold-300/25 blur-[1px]"></div>
              <div className="absolute inset-0 bg-radial from-transparent to-sapphire-950/20"></div>

              {channiActive && (
                <div className="absolute inset-0 channi-mesh bg-sapphire-900/10 animate-fade-in flex items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-gold-400/40"></div>
                </div>
              )}
            </div>
          ) : (
            /* Couple Darshan View (Ankit & Amrita together) */
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-gold-400 shadow-[0_0_90px_rgba(246,215,125,0.7)] overflow-hidden animate-fade-in flex items-center justify-center">
              <img
                src={config.moonExperience.darshanPhoto}
                alt="Ankit & Amrita"
                className="w-full h-full object-cover"
              />
              {channiActive && (
                <div className="absolute inset-0 channi-mesh bg-sapphire-950/25 animate-fade-in">
                  <div className="absolute inset-2 rounded-full border border-gold-400/40"></div>
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 py-1 bg-sapphire-950/80 backdrop-blur-sm text-[11px] font-medium text-gold-300">
                Ankit &amp; Amrita ❤️
              </div>
            </div>
          )}

          {/* Traditional Decorated Channi (Sieve) Object */}
          <div
            onClick={() => setChanniActive(!channiActive)}
            className={`absolute cursor-pointer transition-all duration-700 select-none ${
              channiActive
                ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 z-20'
                : 'right-2 sm:-right-8 top-10 sm:top-14 scale-90 hover:scale-100 z-10'
            }`}
            title="Click to view through the channi"
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-gold-400/90 shadow-[0_0_30px_rgba(246,215,125,0.5)] flex items-center justify-center bg-sapphire-950/25 backdrop-blur-[2px]">
              <div className="absolute inset-1 rounded-full border border-gold-300/60"></div>
              <div className="absolute inset-2 rounded-full channi-mesh"></div>

              <div className="absolute -bottom-2 inset-x-0 flex justify-center gap-1 text-[10px] text-gold-300">
                <span>✦</span>
                <span>🌹</span>
                <span>✦</span>
              </div>
            </div>
            <p className="text-[11px] text-gold-300 font-medium text-center mt-2 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {channiActive ? '✓ Looking Through Channi' : 'Tap to Hold Channi 🌟'}
            </p>
          </div>

          {/* Traditional Illuminated Diya on Thali */}
          <div className="absolute left-2 sm:-left-8 bottom-6 flex flex-col items-center z-20">
            <div className="w-4 h-7 rounded-full diya-flame-core animate-diya-flame mb-0.5"></div>
            <div className="w-12 h-5 bg-gradient-to-r from-gold-500 via-amber-600 to-gold-600 rounded-b-full border border-gold-300/60 shadow-[0_0_18px_rgba(255,160,0,0.7)]"></div>
            <span className="text-[10px] text-celestial-200/70 mt-1 uppercase tracking-widest">
              Sacred Diya
            </span>
          </div>
        </div>

        {/* Traditional Romantic Quote */}
        <div className="glass-card max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl border border-gold-400/35 my-8 shadow-2xl">
          <p className="font-cormorant text-xl sm:text-2xl text-cream-100 italic leading-relaxed">
            "{config.moonExperience.quote}"
          </p>
        </div>

        {/* Interactive "Make a Wish" Action Button */}
        <div className="my-6">
          <button
            onClick={handleMakeWish}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-serif font-bold text-base sm:text-lg text-sapphire-950 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 shadow-[0_0_35px_rgba(246,215,125,0.45)] hover:shadow-[0_0_55px_rgba(246,215,125,0.75)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles size={20} className="text-sapphire-950 group-hover:rotate-12 transition-transform" />
            <span>{config.moonExperience.buttonText}</span>
            <Moon size={20} className="text-sapphire-950" />
          </button>
        </div>

        {/* Revealed Sacred Wish Card */}
        {wishMade && (
          <div className="glass-card max-w-xl mx-auto p-8 rounded-3xl border-2 border-gold-400/50 shadow-[0_0_45px_rgba(246,215,125,0.35)] bg-gradient-to-b from-sapphire-900/90 to-midnight-950/95 animate-fade-in text-center mt-6">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-300 shadow-md">
              <Sparkles size={22} className="animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            <h3 className="font-serif text-2xl font-bold gold-gradient-text mb-3">
              A Moonlit Prayer for You
            </h3>

            <p className="font-cormorant italic text-lg sm:text-2xl text-cream-100 leading-relaxed mb-4">
              "{config.moonExperience.wishResponse}"
            </p>

            <p className="font-script text-2xl sm:text-3xl gold-gradient-text font-normal">
              {config.moonExperience.wishSignoff}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
