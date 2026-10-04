import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'education', label: 'Education' },
  { id: 'coding', label: 'Coding' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#070b14]/85 dark:bg-[#070b14]/85 light:bg-white/85 border-b border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Area */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-green/10 border border-accent-green/30 text-accent-green group-hover:border-accent-cyan/60 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all duration-300">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight text-white dark:text-white light:text-slate-900">
              <span className="text-white dark:text-white light:text-slate-900">Vishal </span>
              <span className="text-accent-cyan font-medium">Kumar Yadav</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-white dark:text-white light:text-slate-900'
                      : 'text-slate-400 hover:text-slate-200 dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-accent-green to-accent-cyan rounded-full shadow-glow-cyan" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent-cyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-[#070b14]/98 dark:bg-[#070b14]/98 light:bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl transition-all animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex justify-between items-center px-4">
            <span className="text-xs text-slate-400 font-mono">
              Status: {PERSONAL_INFO.status}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
