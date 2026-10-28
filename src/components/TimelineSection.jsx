import React from 'react';
import { Heart, Sparkles, Moon, Infinity, Calendar, Bookmark } from 'lucide-react';
import { config } from '../config';

export default function TimelineSection() {
  const getIcon = (type) => {
    switch (type) {
      case 'sparkles':
        return <Sparkles size={18} className="text-gold-300" />;
      case 'heart':
        return <Heart size={18} className="text-rose-400 fill-rose-500/50" />;
      case 'moon':
        return <Moon size={18} className="text-gold-300" />;
      case 'infinite':
        return <Infinity size={18} className="text-gold-300" />;
      default:
        return <Heart size={18} className="text-gold-300" />;
    }
  };

  return (
    <section id="our-story" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-sapphire-600/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
            <Bookmark size={14} className="text-gold-400" />
            <span>Our Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wide mb-3">
            {config.timeline.title}
          </h2>
          <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto">
            {config.timeline.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Golden Track Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-gold-400/50 to-transparent"></div>
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-gold-400/50 to-transparent"></div>

          <div className="space-y-12">
            {config.timeline.milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                    <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-gold-400/25 shadow-xl group">
                      {/* Top metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300 border border-gold-400/25 text-xs font-medium">
                          <Calendar size={12} />
                          {milestone.date}
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-celestial-300 font-semibold">
                          {milestone.tag}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Milestone Description */}
                      <p className="text-cream-100/85 text-sm sm:text-base leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Romantic Highlight Quote */}
                      <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm text-gold-300/90 font-cormorant italic">
                        <Sparkles size={14} className="text-gold-400 shrink-0" />
                        <span>"{milestone.highlight}"</span>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Orb */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-sapphire-900 via-sapphire-800 to-midnight-800 border-2 border-gold-400 flex items-center justify-center shadow-[0_0_20px_rgba(246,215,125,0.45)] group-hover:scale-110 transition-transform">
                      {getIcon(milestone.icon)}
                    </div>
                  </div>

                  {/* Empty Spacer Side for desktop grid */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
