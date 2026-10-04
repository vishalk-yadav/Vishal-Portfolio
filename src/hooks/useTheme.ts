import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme') as Theme | null;
      if (urlTheme === 'dark' || urlTheme === 'light') return urlTheme;

      const stored = localStorage.getItem('vishal-portfolio-theme') as Theme | null;
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return 'dark'; // Dark mode default as specified
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('vishal-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
