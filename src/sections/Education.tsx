import { GraduationCap, BookOpen, School } from 'lucide-react';
import { EDUCATION_INFO } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            My <br className="hidden sm:inline" />
            <span className="text-gradient">academic background</span>
          </h2>
        </div>

        {/* Main Education Card */}
        <div className="max-w-4xl p-7 sm:p-9 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl relative overflow-hidden group">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 glow-spot-cyan opacity-20 pointer-events-none rounded-full blur-2xl" />

          <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
            {/* Graduation Cap Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shrink-0 shadow-glow-cyan">
              <GraduationCap className="w-7 h-7" />
            </div>

            {/* Main Info */}
            <div className="space-y-5 flex-1">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-accent-green/10 border border-accent-green/30 text-accent-green font-medium">
                    {EDUCATION_INFO.currentYear}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-medium">
                    AKTU Affiliated
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                  {EDUCATION_INFO.degree}
                </h3>
                <p className="text-base sm:text-lg font-medium text-accent-cyan mt-0.5">
                  {EDUCATION_INFO.specialization}
                </p>
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 flex items-center gap-1.5">
                  <School className="w-4 h-4 text-slate-400" />
                  <span>{EDUCATION_INFO.college}</span>
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  University: {EDUCATION_INFO.university}
                </p>
                <p className="text-xs font-mono text-accent-green font-semibold mt-2">
                  Expected Graduation: {EDUCATION_INFO.graduationYear}
                </p>
              </div>

              {/* Secondary Milestones Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                  <span className="block text-xs font-mono text-slate-400">Class XII (Senior Secondary)</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-lg">
                      {EDUCATION_INFO.seniorSecondary.percentage}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Year: {EDUCATION_INFO.seniorSecondary.year}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                  <span className="block text-xs font-mono text-slate-400">Class X (Secondary)</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-bold text-white dark:text-white light:text-slate-900 text-lg">
                      {EDUCATION_INFO.secondary.percentage}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Year: {EDUCATION_INFO.secondary.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Areas of Interest</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_INFO.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-[#131b2e] dark:bg-[#131b2e] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
