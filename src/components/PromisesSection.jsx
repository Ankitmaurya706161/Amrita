import React from 'react';
import { ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';
import { config } from '../config';

export default function PromisesSection() {
  return (
    <section id="promises" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sapphire-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-900/60 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-widest mb-3">
            <ShieldCheck size={14} className="text-gold-400" />
            <span>Lifelong Commitments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wide mb-3">
            {config.promises.title}
          </h2>
          <p className="text-celestial-200/80 text-sm sm:text-base font-light max-w-lg mx-auto">
            {config.promises.subtitle}
          </p>
        </div>

        {/* Promises Card Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-12 border-2 border-gold-400/40 shadow-2xl bg-gradient-to-b from-[#0A1438]/90 via-[#0E1D4E]/85 to-[#050B1D]/95 relative">
          {/* Inner Accent Line */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold-400/20 pointer-events-none"></div>

          {/* Promises List */}
          <div className="space-y-6 relative z-10">
            {config.promises.items.map((item) => (
              <div
                key={item.id}
                className="group p-4 sm:p-5 rounded-2xl bg-white/[0.04] hover:bg-gold-400/[0.08] border border-white/5 hover:border-gold-400/35 transition-all duration-300 flex items-start gap-4"
              >
                {/* Golden Promise Badge */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-sapphire-800 to-sapphire-700 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-md group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={18} className="text-gold-400" />
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-200 transition-colors mb-1">
                    {item.promise}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/80 font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Concluding Quote Banner */}
          <div className="mt-10 pt-8 border-t border-gold-400/25 text-center relative z-10">
            <div className="inline-block p-2 rounded-full bg-sapphire-900/70 border border-gold-400/35 mb-3">
              <Heart size={20} className="fill-rose-500 text-gold-300" />
            </div>
            <p className="font-cormorant italic text-xl sm:text-2xl text-gold-200/95 max-w-2xl mx-auto leading-relaxed">
              "{config.promises.footerQuote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
