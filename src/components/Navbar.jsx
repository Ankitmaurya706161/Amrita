import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Heart, Sparkles, Menu, X, Palette } from 'lucide-react';
import { config } from '../config';
import { romanticAudio } from '../utils/audioPlayer';

export default function Navbar({ petalsEnabled, setPetalsEnabled, currentTheme, toggleTheme }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = romanticAudio.subscribe((status) => {
      setIsPlaying(status);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Love Letter', href: '#love-letter' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Memories', href: '#memories' },
    { label: 'Moon Ritual', href: '#moon-experience' },
    { label: '8 Reasons', href: '#reasons' },
    { label: 'Promises', href: '#promises' },
    { label: 'One Last Gift', href: '#final-surprise' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-midnight-950/90 backdrop-blur-md border-b border-gold-400/25 shadow-[0_4px_30px_rgba(2,5,14,0.7)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Romantic Crest */}
        <a
          href="#top"
          className="flex items-center gap-2 group text-decoration-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sapphire-800 to-gold-500/40 border border-gold-400/50 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(246,215,125,0.3)]">
            <Heart size={16} className="fill-rose-500 text-gold-300" />
          </div>
          <span className="font-serif text-base sm:text-lg tracking-wide gold-gradient-text font-bold">
            {config.girlfriendName} &amp; {config.boyfriendName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider text-celestial-200/85 hover:text-gold-300 transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(246,215,125,0.5)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls: Palette Toggle + Music + Petals Toggle + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Palette Switcher */}
          <button
            onClick={toggleTheme}
            title={
              currentTheme === 'midnight'
                ? 'Switch to Festive Maroon & Rose Gold'
                : 'Switch to Royal Midnight Blue & Gold'
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-400/35 bg-white/5 hover:bg-gold-400/15 text-gold-300 text-xs font-medium transition-all shadow-sm"
          >
            <Palette size={14} className="text-gold-400" />
            <span className="hidden sm:inline">
              {currentTheme === 'midnight' ? 'Royal Blue' : 'Festive Maroon'}
            </span>
          </button>

          {/* Petals Toggle */}
          <button
            onClick={() => setPetalsEnabled(!petalsEnabled)}
            title={petalsEnabled ? 'Pause floating petals' : 'Enable floating petals'}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
              petalsEnabled
                ? 'bg-sapphire-800/80 border-gold-400/50 text-gold-300 shadow-[0_0_12px_rgba(246,215,125,0.35)]'
                : 'bg-white/5 border-white/10 text-cream-200/40 hover:text-cream-200'
            }`}
          >
            <Sparkles size={16} />
          </button>

          {/* Music Button */}
          <button
            onClick={() => romanticAudio.toggle()}
            title={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-all ${
              isPlaying
                ? 'bg-gradient-to-r from-sapphire-800 via-sapphire-700 to-sapphire-800 border-gold-400 text-gold-300 shadow-[0_0_15px_rgba(246,215,125,0.4)]'
                : 'bg-white/5 border-white/15 text-cream-200/75 hover:text-gold-200 hover:border-gold-400/40'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 size={16} className="text-gold-300 animate-pulse" />
                <span className="hidden sm:inline">Music Playing</span>
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-gold-300 h-2 animate-bounce"></span>
                  <span className="w-0.5 bg-gold-400 h-3 animate-pulse"></span>
                  <span className="w-0.5 bg-gold-200 h-1.5 animate-bounce"></span>
                </span>
              </>
            ) : (
              <>
                <VolumeX size={16} />
                <span className="hidden sm:inline">Play Melody</span>
              </>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-cream-200 hover:text-gold-300"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-midnight-950/98 backdrop-blur-xl border-b border-gold-400/25 px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wide text-cream-100 hover:text-gold-300 py-1 transition-colors flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <Heart size={14} className="text-rose-400 opacity-70" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
