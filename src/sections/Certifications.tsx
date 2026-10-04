import React, { useState } from 'react';
import { Award, ShieldCheck, Cloud, Flame, CheckCircle2, Users, HeartHandshake, Trophy, Activity } from 'lucide-react';
import { CERTIFICATIONS, ACTIVITIES } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'activities'>('certifications');

  const getCertIcon = (title: string) => {
    if (title.includes('Data Analytics')) return <Award className="w-5 h-5 text-accent-cyan" />;
    if (title.includes('Cyber')) return <ShieldCheck className="w-5 h-5 text-accent-green" />;
    if (title.includes('AWS') || title.includes('Genesis')) return <Cloud className="w-5 h-5 text-amber-400" />;
    if (title.includes('Prompt Wars')) return <Flame className="w-5 h-5 text-rose-400" />;
    return <CheckCircle2 className="w-5 h-5 text-accent-violet" />;
  };

  const getActivityIcon = (title: string) => {
    if (title.includes('Head')) return <Users className="w-5 h-5 text-accent-cyan" />;
    if (title.includes('NSS')) return <HeartHandshake className="w-5 h-5 text-accent-green" />;
    if (title.includes('Hackathons')) return <Trophy className="w-5 h-5 text-amber-400" />;
    return <Activity className="w-5 h-5 text-accent-violet" />;
  };

  return (
    <section id="certifications" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-10 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-xs font-mono font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Certifications & <br className="hidden sm:inline" />
            <span className="text-gradient">extracurriculars</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Verified industry simulations, technical workshops, competitive participations, and campus leadership roles.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 shadow-glow-cyan'
                : 'bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700'
            }`}
          >
            Certifications & Simulations ({CERTIFICATIONS.length})
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'activities'
                ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 shadow-glow-cyan'
                : 'bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700'
            }`}
          >
            Leadership & Activities ({ACTIVITIES.length})
          </button>
        </div>

        {/* Tab 1: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center">
                      {getCertIcon(cert.title)}
                    </div>
                    {cert.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-white dark:text-white light:text-slate-900 mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-green mb-3">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Leadership & Activities */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {ACTIVITIES.map((act, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center">
                      {getActivityIcon(act.title)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-white dark:text-white light:text-slate-900">
                        {act.title}
                      </h3>
                      <p className="text-xs font-mono text-accent-cyan">
                        {act.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-wrap gap-1.5">
                  {act.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
