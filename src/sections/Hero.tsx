import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Code2, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { CodeWindow } from '../components/CodeWindow';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[680px] lg:min-h-[780px] flex flex-col justify-center pt-20 sm:pt-28 pb-16 overflow-hidden">
      {/* Subtle radial glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 glow-spot-green pointer-events-none rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 glow-spot-cyan pointer-events-none rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 glow-spot-violet pointer-events-none rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-xs font-mono font-medium shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
                Hi, I'm <br />
                <span className="text-gradient">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base font-semibold text-accent-cyan tracking-wider uppercase pt-2">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Action Buttons Row 1 */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold text-sm hover:opacity-95 hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm font-medium hover:border-accent-cyan/50 hover:text-white dark:hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm font-medium hover:border-accent-cyan/50 hover:text-accent-cyan transition-all transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm font-medium hover:border-amber-400/50 hover:text-amber-400 transition-all transform hover:-translate-y-0.5"
              >
                <Code2 className="w-4 h-4" />
                <span>LeetCode</span>
              </a>
            </div>

            {/* Action Buttons Row 2 */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs sm:text-sm font-medium hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 hover:text-white transition-all"
              >
                Contact Me
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs sm:text-sm font-medium hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 hover:text-white transition-all"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                Download Resume
              </a>
            </div>

            {/* Compact Profile Quick Facts */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              <div>
                <span className="block text-xs font-mono uppercase text-slate-400">B.Tech</span>
                <span className="text-sm font-bold text-white dark:text-white light:text-slate-900">CSE (AI & ML)</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase text-slate-400">Grad</span>
                <span className="text-sm font-bold text-accent-cyan">2029</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase text-slate-400">Focus</span>
                <span className="text-sm font-bold text-accent-green">AI / ML</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase text-slate-400">Current</span>
                <span className="text-sm font-bold text-purple-300">2nd Year</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Visualization */}
          <div className="lg:col-span-5 flex justify-center">
            <CodeWindow />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About section" className="flex flex-col items-center">
          <div className="w-5 h-8 rounded-full border-2 border-slate-500/60 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500 mt-1" />
        </a>
      </div>
    </section>
  );
};
