import React, { useState } from 'react';
import { Check, Copy, Play } from 'lucide-react';

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer.ts' | 'focus.json' | 'terminal'>('developer.ts');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [runOutput, setRunOutput] = useState<string | null>(null);

  const developerCode = `// developer.ts
const vishal = {
  name: "Vishal Kumar Yadav",
  role: "AI/ML Engineer in the Making",
  degree: "B.Tech CSE (AI & ML)",
  college: "R.K.G.I.T., Ghaziabad",
  university: "AKTU, Lucknow",
  currentYear: "2nd Year (Grad 2029)",
  stack: ["C++", "Python", "React", "Node.js", "PostgreSQL"],
  focus: ["AI/ML", "DSA Practice", "Full-Stack Systems"],
  building: "Real-world solutions",
  status: "actively learning & building"
};`;

  const focusJson = `{
  "aiml_interests": [
    "Machine Learning & AI APIs",
    "Generative AI & Prompt Engineering",
    "Multimodal Search & Vision Concepts",
    "Behavioral Risk Pattern Analysis"
  ],
  "dsa_toolkit": [
    "C++ Optimized Solutions",
    "Arrays, Trees, Binary Search",
    "LeetCode Problem Solving"
  ],
  "active_projects": [
    "ProjectSetu (Smart GovTech)",
    "MindFlow (Student Wellbeing & AI)",
    "CareX (Assistive Safety)",
    "Krishi Mitra (Farmer Procurement Tech)"
  ]
}`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'developer.ts' ? developerCode : focusJson;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setRunOutput('Compiling developer.ts with tsx runtime...');
    setTimeout(() => {
      setRunOutput('✨ Vishal Kumar Yadav ready: Ready to build ideas into real-world solutions 🚀');
      setIsRunning(false);
    }, 800);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-[#0a0f1d]/90 dark:bg-[#0a0f1d]/90 light:bg-slate-900 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-xs sm:text-sm transition-all duration-300 hover:border-accent-cyan/40">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#070b14]/80 border-b border-white/10 dark:border-white/10 light:border-slate-800">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
          <span className="ml-2 text-xs text-slate-400 font-sans tracking-wide">
            vishal@portfolio:~
          </span>
        </div>

        {/* Tab triggers */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => { setActiveTab('developer.ts'); setRunOutput(null); }}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === 'developer.ts'
                ? 'bg-accent-cyan/15 text-accent-cyan font-semibold border border-accent-cyan/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            developer.ts
          </button>
          <button
            onClick={() => { setActiveTab('focus.json'); setRunOutput(null); }}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === 'focus.json'
                ? 'bg-accent-cyan/15 text-accent-cyan font-semibold border border-accent-cyan/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            focus.json
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === 'terminal'
                ? 'bg-accent-cyan/15 text-accent-cyan font-semibold border border-accent-cyan/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            run
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
          title="Copy code"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-accent-green" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Editor Body */}
      <div className="p-4 sm:p-6 overflow-x-auto text-slate-300 leading-relaxed font-mono">
        {activeTab === 'developer.ts' && (
          <div>
            <div className="text-slate-500 mb-2">// developer.ts</div>
            <div>
              <span className="text-purple-400 font-semibold">const</span>{' '}
              <span className="text-accent-cyan font-semibold">vishal</span> = {'{'}
            </div>
            <div className="pl-4 sm:pl-6 space-y-1">
              <div>
                <span className="text-blue-300">name</span>: <span className="text-emerald-300">"Vishal Kumar Yadav"</span>,
              </div>
              <div>
                <span className="text-blue-300">role</span>: <span className="text-emerald-300">"AI/ML Engineer in the Making"</span>,
              </div>
              <div>
                <span className="text-blue-300">degree</span>: <span className="text-emerald-300">"B.Tech CSE (AI & ML)"</span>,
              </div>
              <div>
                <span className="text-blue-300">college</span>: <span className="text-emerald-300">"RKGIT, Ghaziabad (AKTU)"</span>,
              </div>
              <div>
                <span className="text-blue-300">currentYear</span>: <span className="text-emerald-300">"2nd Year"</span>,
              </div>
              <div>
                <span className="text-blue-300">gradYear</span>: <span className="text-amber-300">2029</span>,
              </div>
              <div>
                <span className="text-blue-300">university</span>: <span className="text-emerald-300">"AKTU"</span>,
              </div>
              <div>
                <span className="text-blue-300">stack</span>: [
                <span className="text-emerald-300">"C++"</span>,{' '}
                <span className="text-emerald-300">"Python"</span>,{' '}
                <span className="text-emerald-300">"React"</span>,{' '}
                <span className="text-emerald-300">"Node.js"</span>
                ],
              </div>
              <div>
                <span className="text-blue-300">focus</span>: [
                <span className="text-emerald-300">"AI/ML"</span>,{' '}
                <span className="text-emerald-300">"DSA"</span>,{' '}
                <span className="text-emerald-300">"Full-Stack"</span>
                ],
              </div>
              <div>
                <span className="text-blue-300">building</span>: <span className="text-emerald-300">"Real-world solutions"</span>,
              </div>
              <div>
                <span className="text-blue-300">status</span>: <span className="text-accent-green font-semibold">"actively learning & building"</span>
              </div>
            </div>
            <div>{'};'}</div>
          </div>
        )}

        {activeTab === 'focus.json' && (
          <pre className="text-slate-300 text-xs sm:text-sm whitespace-pre">
            {focusJson}
          </pre>
        )}

        {activeTab === 'terminal' && (
          <div className="space-y-3 font-mono">
            <div className="text-slate-400">
              $ <span className="text-accent-cyan">npx tsx</span> developer.ts --status
            </div>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-green/20 border border-accent-green/40 text-accent-green hover:bg-accent-green/30 text-xs font-semibold transition-colors disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              {isRunning ? 'Running...' : 'Execute Script'}
            </button>
            {runOutput && (
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-accent-cyan text-xs leading-relaxed animate-fadeIn">
                {runOutput}
              </div>
            )}
            <div className="text-slate-500 text-xs pt-2">
              ● actively_building: true | leetcode_streak: ongoing | hackathons: active
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
