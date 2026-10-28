import React from 'react';
import { Heart, Sparkles, Moon, ArrowDown, Camera, Mail } from 'lucide-react';
import { config } from '../config';

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Decorative Ethereal Gradients in Sapphire & Gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sapphire-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
        {/* Festive Celestial Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sapphire-900/70 border border-gold-400/35 text-gold-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_25px_rgba(246,215,125,0.2)] animate-pulse-subtle">
          <Sparkles size={14} className="text-gold-400" />
          <span>{config.mainTagline}</span>
          <Sparkles size={14} className="text-gold-400" />
        </div>

        {/* Central Luminous Moon Centerpiece with Amrita's Festive Portrait */}
        <div className="relative my-4 flex items-center justify-center">
          {/* Animated Atmospheric Radiance */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gold-400/25 blur-3xl animate-pulse-subtle"></div>
          <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-celestial-500/20 blur-2xl"></div>

          {/* Majestic Full Moon Body */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#FFFDF5] via-[#FDF6D8] to-[#FFFFFF] shadow-[0_0_80px_rgba(246,215,125,0.65),0_0_110px_rgba(56,189,248,0.25)] border-2 border-gold-300/50 animate-float-slow overflow-hidden flex items-center justify-center">
            <div className="absolute top-8 left-10 w-9 h-9 rounded-full bg-gold-400/20 blur-[1px]"></div>
            <div className="absolute bottom-10 right-10 w-14 h-12 rounded-full bg-gold-500/15 blur-[2px]"></div>
            <div className="absolute top-16 right-8 w-7 h-7 rounded-full bg-gold-400/20 blur-[1px]"></div>
            <div className="absolute bottom-16 left-12 w-6 h-6 rounded-full bg-gold-300/25 blur-[1px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sapphire-950/20"></div>
          </div>

          {/* Floating Romantic Photo Medallion (Amrita in Red-Gold Dupatta) */}
          <div className="absolute -bottom-4 right-0 sm:right-2 z-20 group">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-gold-300 via-gold-400 to-rose-400 shadow-[0_0_25px_rgba(246,215,125,0.6)] animate-pulse-subtle">
              <img
                src={config.hero.avatarPhoto}
                alt="Amrita Karwa Chauth"
                className="w-full h-full object-cover rounded-full border-2 border-sapphire-950 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 text-sm bg-sapphire-950 border border-gold-400 rounded-full p-0.5">
                🌙
              </span>
            </div>
          </div>

          {/* Left Flanking Diya */}
          <div className="absolute -left-12 sm:-left-20 bottom-2 flex flex-col items-center">
            <div className="w-3.5 h-6 rounded-full diya-flame-core animate-diya-flame mb-0.5"></div>
            <div className="w-9 h-4 bg-gradient-to-r from-gold-500 via-amber-600 to-gold-600 rounded-b-full border border-gold-400/60 shadow-[0_0_12px_rgba(255,160,0,0.6)]"></div>
          </div>

          {/* Right Flanking Diya */}
          <div className="absolute -right-12 sm:-right-20 bottom-2 flex flex-col items-center">
            <div className="w-3.5 h-6 rounded-full diya-flame-core animate-diya-flame mb-0.5" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-9 h-4 bg-gradient-to-r from-gold-500 via-amber-600 to-gold-600 rounded-b-full border border-gold-400/60 shadow-[0_0_12px_rgba(255,160,0,0.6)]"></div>
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 mt-6 leading-tight">
          <span className="block">{config.hero.heading.split(',')[0]},</span>
          <span className="gold-gradient-text drop-shadow-[0_2px_20px_rgba(246,215,125,0.4)]">
            {config.hero.heading.split(',')[1] || config.hero.heading}
          </span>
        </h1>

        <p className="font-serif italic text-lg sm:text-2xl text-celestial-200/90 max-w-2xl mx-auto mb-5 leading-relaxed font-normal">
          "{config.hero.subheading}"
        </p>

        {/* Romantic Display Quote */}
        <div className="glass-card px-6 py-4 rounded-2xl max-w-xl mx-auto mb-10 border border-gold-400/30 shadow-lg">
          <p className="font-cormorant text-base sm:text-xl text-cream-100 italic tracking-wide">
            "{config.hero.quote}"
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#love-letter"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-serif font-bold text-sm sm:text-base text-sapphire-950 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 hover:from-gold-100 hover:to-gold-200 shadow-[0_0_25px_rgba(246,215,125,0.45)] hover:shadow-[0_0_40px_rgba(246,215,125,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Mail size={18} className="text-sapphire-950 group-hover:rotate-6 transition-transform" />
            <span>{config.hero.primaryBtn}</span>
          </a>

          <a
            href="#memories"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-cream-100 bg-sapphire-900/60 hover:bg-sapphire-800/80 border border-gold-400/35 hover:border-gold-400/70 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Camera size={18} className="text-gold-300 group-hover:scale-110 transition-transform" />
            <span>{config.hero.secondaryBtn}</span>
          </a>
        </div>

        {/* Gentle Scroll Indicator */}
        <div className="mt-14 animate-bounce text-gold-400/80 flex flex-col items-center gap-1">
          <span className="text-[11px] uppercase tracking-widest text-celestial-200/60">Scroll to explore</span>
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
}
