import React from 'react';
import { Milestone, Compass } from 'lucide-react';
import { JOURNEY_PHASES } from '../data/portfolio';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-violet/30 bg-accent-violet/10 text-accent-violet text-xs font-mono font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Learning Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            My path so far — <br className="hidden sm:inline" />
            <span className="text-gradient">still in progress</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            A snapshot of the technologies, ideas, and problem-solving skills I'm developing. Everything here reflects active growth and ongoing practice.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-10 sm:space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-accent-green before:via-accent-cyan before:to-accent-violet">
          {JOURNEY_PHASES.map((item) => (
            <div key={item.phase} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[30px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#070b14] dark:bg-[#070b14] light:bg-white border-2 border-accent-cyan flex items-center justify-center shadow-glow-cyan transition-transform duration-300 group-hover:scale-125">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-ping opacity-75" />
                <div className="absolute w-2 h-2 rounded-full bg-accent-green" />
              </div>

              {/* Phase Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold tracking-wider text-accent-cyan uppercase">
                    Phase {item.phase}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Footnote */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-accent-green/10 via-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 text-center max-w-2xl mx-auto backdrop-blur-sm">
          <Milestone className="w-6 h-6 text-accent-cyan mx-auto mb-2" />
          <p className="font-mono text-sm sm:text-base font-semibold text-white dark:text-white light:text-slate-900">
            "Still learning. Still building. Still improving."
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Committed to continuous daily engineering growth.
          </p>
        </div>
      </div>
    </section>
  );
};
