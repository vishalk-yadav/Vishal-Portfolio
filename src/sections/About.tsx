import React from 'react';
import { MapPin, Sparkles, GraduationCap } from 'lucide-react';
import { ABOUT_TEXT, PERSONAL_INFO, EDUCATION_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Building practical technology while <br className="hidden sm:inline" />
            <span className="text-gradient">learning every day</span>
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Narrative & Profile Badge */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg">
            {ABOUT_TEXT.paragraphs.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}

            {/* Profile Highlight Card with Photo */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl bg-[#0e1526]/60 dark:bg-[#0e1526]/60 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-accent-cyan/40 shadow-glow-cyan shrink-0"
                onError={(e) => {
                  // Fallback in case image fails to load
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-semibold text-white dark:text-white light:text-slate-900 text-base flex items-center justify-center sm:justify-start gap-2">
                  <span>{PERSONAL_INFO.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-green/20 text-accent-green font-mono">
                    {PERSONAL_INFO.currentYear}
                  </span>
                </div>
                <p className="text-xs font-mono text-accent-cyan">
                  {PERSONAL_INFO.headline}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-green" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_TEXT.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm"
                >
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    {card.label}
                  </span>
                  <span className={`text-base sm:text-lg font-bold ${card.color} block leading-snug`}>
                    {card.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Academic Milestones Pill */}
            <div className="p-5 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="font-semibold text-white dark:text-white light:text-slate-900">
                  Prior Academic Record
                </div>
                <div className="text-slate-400 space-y-0.5 font-mono text-xs">
                  <div>Class XII (Senior Secondary): <span className="text-accent-cyan font-bold">{EDUCATION_INFO.seniorSecondary.percentage}</span> ({EDUCATION_INFO.seniorSecondary.year})</div>
                  <div>Class X (Secondary): <span className="text-accent-green font-bold">{EDUCATION_INFO.secondary.percentage}</span> ({EDUCATION_INFO.secondary.year})</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
