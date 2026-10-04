import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Users, Trophy } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d1424] dark:bg-[#0d1424] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 shadow-2xl p-6 sm:p-8 text-slate-100 dark:text-slate-100 light:text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                {project.badge}
              </span>
            )}
            {project.hackathon && (
              <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Trophy className="w-3.5 h-3.5" />
                {project.hackathon}
              </span>
            )}
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm text-slate-400 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Team Details if available */}
        {project.team && (
          <div className="mt-4 p-3.5 rounded-xl bg-accent-green/5 border border-accent-green/20 flex items-start gap-3">
            <Users className="w-4 h-4 text-accent-green mt-0.5 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-accent-green">Team {project.team.name}:</span>{' '}
              <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                {project.team.members.join(', ')}
              </span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="mt-6 space-y-6 text-sm leading-relaxed">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution */}
          {project.problem && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1">
                  The Problem
                </h4>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs sm:text-sm">
                  {project.problem}
                </p>
              </div>

              {project.solution && (
                <div className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold mb-1">
                    The Solution
                  </h4>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs sm:text-sm">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Key Features
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Technologies Explored
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Note if applicable */}
          {project.note && (
            <div className="text-xs text-slate-400 italic">
              ℹ️ {project.note}
            </div>
          )}
        </div>

        {/* Action Links */}
        <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 dark:bg-white/10 light:bg-slate-100 hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-slate-200 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-xs sm:text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 text-xs sm:text-sm font-semibold hover:opacity-95 shadow-glow-cyan transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Launch Live Application
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
