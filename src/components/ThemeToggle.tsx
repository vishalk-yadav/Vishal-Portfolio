import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative p-2.5 rounded-xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-[#0e1526] hover:bg-white/10 dark:hover:bg-[#151f38] text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-accent-cyan transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 shadow-sm"
    >
      {isDark ? (
        <Moon className="w-4 h-4 text-accent-cyan transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 hover:rotate-45" />
      )}
    </button>
  );
};
