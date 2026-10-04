import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-[#060a12] dark:bg-[#060a12] light:bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/30 text-accent-green">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-semibold text-lg text-white dark:text-white light:text-slate-900">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              "{PERSONAL_INFO.tagline.toLowerCase()}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-accent-cyan/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 hover:text-accent-cyan dark:hover:text-accent-cyan light:hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-500 hover:border-amber-400/40 transition-all"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.social.email}
              aria-label="Send Email"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 hover:text-accent-green dark:hover:text-accent-green light:hover:text-accent-green hover:border-accent-green/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeFileName}
              aria-label="Download Resume PDF"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 hover:text-accent-violet dark:hover:text-accent-violet light:hover:text-accent-violet hover:border-accent-violet/40 transition-all"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top & copyright */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>© 2026 Vishal Kumar Yadav</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-accent-cyan transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
