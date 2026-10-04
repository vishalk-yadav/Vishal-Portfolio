import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#070b14',
          'dark-card': '#0e1526',
          'dark-card-hover': '#131c33',
          'dark-surface': '#111827',
          light: '#f8fafc',
          'light-card': '#ffffff',
          'light-card-hover': '#f1f5f9',
          'light-surface': '#f3f4f6',
        },
        accent: {
          green: '#10b981',
          'green-light': '#34d399',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          blue: '#3b82f6',
          violet: '#8b5cf6',
        },
        border: {
          dark: 'rgba(255, 255, 255, 0.08)',
          'dark-hover': 'rgba(34, 211, 238, 0.25)',
          light: 'rgba(0, 0, 0, 0.08)',
          'light-hover': 'rgba(6, 182, 212, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-green': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px -3px rgba(6, 182, 212, 0.1)',
        'glow-card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 25px -2px rgba(6, 182, 212, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-gradient': 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('light', ':root:not(.dark) &');
    }),
  ],
}
