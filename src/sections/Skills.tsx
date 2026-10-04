import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  BarChart3,
  Binary,
  Terminal,
  Wrench,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio';

export const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-accent-cyan" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-accent-green" />;
      case 'Server':
        return <Server className="w-5 h-5 text-accent-cyan" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-accent-violet" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-accent-cyan" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-accent-green" />;
      default:
        return <Wrench className="w-5 h-5 text-accent-cyan" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-xs font-mono font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Technologies I work with & <br className="hidden sm:inline" />
            <span className="text-gradient">am learning</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Skills marked{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-medium">
              Currently Learning
            </span>{' '}
            are areas I am actively studying right now — the rest are technologies I am comfortable using through coursework, projects, and practice.
          </p>
        </div>

        {/* 8-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 group-hover:border-accent-cyan/40 transition-colors">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white dark:text-white light:text-slate-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#131b2e]/90 dark:bg-[#131b2e]/90 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-accent-cyan/40 transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.currentlyLearning && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 text-accent-cyan font-mono font-medium">
                          Learning
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
