import React, { useState } from 'react';
import { Folder, Github, ExternalLink, Sparkles, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = [
  'All',
  'AI / ML',
  'Full-Stack',
  'GovTech & Safety',
  'AgriTech',
  'Hackathon',
  'College Projects',
];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI / ML') return p.category.includes('AI') || p.category.includes('ML');
    if (selectedCategory === 'Full-Stack') return p.category.includes('Full-Stack') || p.techStack.includes('Node.js') || p.techStack.includes('React');
    if (selectedCategory === 'GovTech & Safety') return p.category.includes('GovTech') || p.category.includes('Safety') || p.category.includes('Governance');
    if (selectedCategory === 'AgriTech') return p.category.includes('AgriTech') || p.id.includes('krishi');
    if (selectedCategory === 'Hackathon') return p.category.includes('Hackathon') || p.hackathon !== undefined;
    if (selectedCategory === 'College Projects') return p.category.includes('College') || p.badge?.includes('College');
    return true;
  });

  // By default, display featured / top projects first unless user searches or expands
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-10 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Things I've <br className="hidden sm:inline" />
            <span className="text-gradient">built & learned from</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Projects built through experimentation, hackathons, coursework, and a desire to solve real-world problems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold shadow-glow-cyan'
                  : 'bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-accent-cyan/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm hover:shadow-glow-card flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Folder className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-accent-cyan">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-accent-violet/15 border border-accent-violet/30 text-purple-300">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                        aria-label={`${project.name} GitHub Repository`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-accent-cyan hover:text-accent-cyan-light font-semibold transition-colors"
                        title="Live Demo"
                        aria-label={`${project.name} Live Demo`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1 text-slate-400 hover:text-accent-green transition-colors"
                      title="View Case Study"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <div className="space-y-1.5 mb-3">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-accent-cyan transition-colors cursor-pointer"
                  >
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-accent-green">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Feature Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.features.slice(0, 4).map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Tech Stack */}
              <div>
                <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono text-accent-cyan hover:underline flex items-center gap-1"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less Toggle */}
        {filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white hover:border-accent-cyan/40 text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm font-semibold transition-all shadow-sm"
            >
              {showAll ? (
                <>
                  <span>Show Fewer Projects</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Explore More Projects ({filteredProjects.length - 6} more)</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
