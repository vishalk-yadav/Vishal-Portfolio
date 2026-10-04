import React from 'react';
import { Github, Code2, Linkedin, ArrowRight, ExternalLink, GitBranch, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { useGithubStats } from '../hooks/useGithubStats';
import { useLeetcodeStats } from '../hooks/useLeetcodeStats';

export const Coding: React.FC = () => {
  const { stats: githubStats } = useGithubStats();
  const { stats: leetcodeStats } = useLeetcodeStats();

  return (
    <section id="coding" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Coding Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Where I <br className="hidden sm:inline" />
            <span className="text-gradient">practice & build</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Code, repositories, and problem-solving practice across competitive programming platforms and open source.
          </p>
        </div>

        {/* Top 3 Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/50 transition-all duration-300 shadow-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-white dark:text-white light:text-slate-900 group-hover:border-accent-cyan/40 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-xl text-white dark:text-white light:text-slate-900">
                GitHub
              </h3>
              <p className="text-xs font-mono text-accent-cyan mb-2">
                @{githubStats.username}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                Code, repositories, and software systems I'm actively building.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-accent-green font-semibold">
                  <GitBranch className="w-3.5 h-3.5" />
                  {githubStats.reposCount} Repos
                </span>
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {githubStats.starsCount} Stars
                </span>
              </div>
              <span className="flex items-center gap-1 text-accent-cyan group-hover:translate-x-0.5 transition-transform">
                {githubStats.status === 'live' && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mr-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
                View &rarr;
              </span>
            </div>
          </a>

          {/* LeetCode Card */}
          <a
            href={PERSONAL_INFO.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-amber-400/50 transition-all duration-300 shadow-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400/50 transition-colors">
                  <Code2 className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-xl text-white dark:text-white light:text-slate-900">
                LeetCode
              </h3>
              <p className="text-xs font-mono text-amber-400 mb-2">
                @{leetcodeStats.username}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                Solving DSA problems to strengthen core algorithms, time complexity, and data structures.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-amber-400 font-semibold">
                {leetcodeStats.totalSolved} Problems Solved
              </span>
              <span className="flex items-center gap-1 text-amber-400 group-hover:translate-x-0.5 transition-transform">
                {leetcodeStats.status === 'live' && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mr-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
                View &rarr;
              </span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/50 transition-all duration-300 shadow-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-xl text-white dark:text-white light:text-slate-900">
                LinkedIn
              </h3>
              <p className="text-xs font-mono text-accent-cyan mb-2">
                @vishalkr-yadav
              </p>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                Documenting engineering progression, hackathon prototypes, and connecting with tech communities.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-accent-cyan font-semibold">
                Connect on LinkedIn
              </span>
              <span>Connect &rarr;</span>
            </div>
          </a>
        </div>

        {/* LeetCode Problem Solving Breakdown */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-amber-400" />
                  <span>LeetCode DSA Practice Analytics</span>
                </h3>
                {leetcodeStats.status === 'live' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10">
                    Synced
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {leetcodeStats.ranking ? `Global Rank #${leetcodeStats.ranking.toLocaleString()} • ` : ''}
                {leetcodeStats.acceptanceRate ? `Acceptance ${leetcodeStats.acceptanceRate} • ` : ''}
                Authentic problem-solving metrics directly from public profile
              </p>
            </div>
            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono hover:bg-amber-500/20 transition-colors"
            >
              <span>Profile Verified</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Difficulty Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-400">Total Solved</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
                {leetcodeStats.totalSolved}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-center">
              <span className="block text-xs font-mono text-emerald-400">Easy</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                {leetcodeStats.easySolved}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center">
              <span className="block text-xs font-mono text-amber-400">Medium</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                {leetcodeStats.mediumSolved}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 text-center">
              <span className="block text-xs font-mono text-rose-400">Hard</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-rose-400">
                {leetcodeStats.hardSolved}
              </span>
            </div>
          </div>

          {/* Languages & Topic Pills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Language Practice Distribution
              </h4>
              <div className="flex flex-wrap gap-2">
                <div className="px-3.5 py-1.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-xs font-mono flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#555555]" />
                  <span className="text-white dark:text-white light:text-slate-900 font-semibold">C</span>
                  <span className="text-accent-cyan font-bold">{leetcodeStats.cProblemsSolved} solved</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-xs font-mono flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f34b7d]" />
                  <span className="text-white dark:text-white light:text-slate-900 font-semibold">C++</span>
                  <span className="text-accent-cyan font-bold">{leetcodeStats.cppProblemsSolved} solved</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Top Algorithmic Topics Solved
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {leetcodeStats.topTopics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#131b2e] dark:bg-[#131b2e] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-800"
                  >
                    {topic.name} <span className="text-accent-cyan font-bold">({topic.count})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Repositories Subsection */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  GitHub Repositories
                </h3>
                {githubStats.status === 'live' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10">
                    Synced
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                Featured repositories from my public GitHub profile with live stars & metrics.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-xs font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-accent-cyan/40 hover:text-white transition-all shadow-sm"
            >
              <span>View Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubStats.repositories.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-green/50 transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <h4 className="font-mono text-base font-bold text-accent-green group-hover:text-accent-cyan transition-colors mb-2">
                    {repo.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {repo.stars}
                      </span>
                    )}
                    {repo.forks > 0 && (
                      <span className="flex items-center gap-1 text-slate-400">
                        <GitBranch className="w-3 h-3" />
                        {repo.forks}
                      </span>
                    )}
                  </div>
                  <span className="text-accent-cyan flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Open on GitHub &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
