import React, { useState, useEffect } from 'react';
import OpeningSurprise from './components/OpeningSurprise';
import PetalsCanvas from './components/PetalsCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoveLetterSection from './components/LoveLetterSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import MoonExperience from './components/MoonExperience';
import ReasonsSection from './components/ReasonsSection';
import CountdownSection from './components/CountdownSection';
import PromisesSection from './components/PromisesSection';
import FinalSurpriseSection from './components/FinalSurpriseSection';
import Footer from './components/Footer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('midnight'); // Royal Midnight Blue & Celestial Gold by default

  useEffect(() => {
    if (currentTheme === 'maroon') {
      document.body.classList.remove('theme-midnight');
      document.body.classList.add('theme-maroon');
    } else {
      document.body.classList.remove('theme-maroon');
      document.body.classList.add('theme-midnight');
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'midnight' ? 'maroon' : 'midnight'));
  };

  const handleOpenSurprise = () => {
    setIsOpened(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Opening Full-Screen Surprise Overlay */}
      <OpeningSurprise onOpenSurprise={handleOpenSurprise} isOpened={isOpened} />

      {/* Floating Canvas Particles (Petals & Twinkling Stars) */}
      <PetalsCanvas enabled={petalsEnabled && isOpened} count={26} />

      {/* Main Website Content (Visible after opening) */}
      {isOpened && (
        <div className="relative z-20 animate-fade-in">
          {/* Top Glass Navigation with Theme Palette Switcher */}
          <Navbar
            petalsEnabled={petalsEnabled}
            setPetalsEnabled={setPetalsEnabled}
            currentTheme={currentTheme}
            toggleTheme={toggleTheme}
          />

          <main>
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Personalized Love Letter */}
            <LoveLetterSection />

            {/* 3. Our Love Story Timeline */}
            <TimelineSection />

            {/* 4. Memories Gallery with Lightbox */}
            <GallerySection />

            {/* 5. Sacred Karwa Chauth Moon Ritual & Wish */}
            <MoonExperience />

            {/* 6. 8 Reasons Why You Are Special */}
            <ReasonsSection />

            {/* 7. Live Countdown & Celebration */}
            <CountdownSection />

            {/* 8. My Promises to You */}
            <PromisesSection />

            {/* 9. Final Surprise — Ankit's Secret Note */}
            <FinalSurpriseSection />
          </main>

          {/* Romantic Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}
