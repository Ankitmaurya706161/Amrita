import React, { useState, useEffect } from 'react';
import { Clock, Heart, Sparkles } from 'lucide-react';
import { config } from '../config';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(config.countdown.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0 || isNaN(difference)) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPast: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sapphire-600/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-20 text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
          <Clock size={14} className="text-gold-400" />
          <span>Moments In Time</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text tracking-wide mb-3">
          {config.countdown.title}
        </h2>

        <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto mb-10">
          {config.countdown.subtitle}
        </p>

        {/* Live Countdown or Past Celebration Mode */}
        {!timeLeft.isPast ? (
          <div>
            <p className="text-sm font-medium text-celestial-300 uppercase tracking-widest mb-6">
              {config.countdown.labelUpcoming}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {timeBlocks.map((block) => (
                <div
                  key={block.label}
                  className="glass-card p-5 sm:p-6 rounded-3xl border border-gold-400/35 shadow-xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-gold-400/60 transition-colors"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-celestial-400"></div>

                  <span className="font-serif text-3xl sm:text-5xl font-bold gold-gradient-text mb-1">
                    {String(block.value).padStart(2, '0')}
                  </span>

                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-celestial-200/75 font-medium">
                    {block.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-card max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl border-2 border-gold-400/40 shadow-2xl bg-gradient-to-b from-[#0A1438]/95 to-midnight-950/95 animate-fade-in">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-tr from-sapphire-800 to-sapphire-700 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-[0_0_20px_rgba(246,215,125,0.35)]">
              <Heart size={26} className="fill-rose-500 text-gold-300 animate-pulse" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text mb-3">
              {config.countdown.labelPast}
            </h3>

            <p className="font-cormorant italic text-lg sm:text-2xl text-cream-100/90 leading-relaxed max-w-xl mx-auto">
              "{config.countdown.pastMessage}"
            </p>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-gold-300/80">
              <Sparkles size={14} className="text-gold-400" />
              <span>With you, every day is magical</span>
              <Sparkles size={14} className="text-gold-400" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
