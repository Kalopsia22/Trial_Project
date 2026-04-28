/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        // Dark background scale
        base: {
          950: '#0b0f1a',
          900: '#111827',
          800: '#1a2235',
          700: '#243044',
          600: '#2e3d55',
          500: '#3d5068',
        },
        // Surface cards
        surface: {
          DEFAULT: '#19213a',
          hover: '#1f2a46',
          border: '#2a3a55',
          muted: '#243044',
        },
        // Text scale
        text: {
          primary: '#e8edf5',
          secondary: '#94a3b8',
          muted: '#64748b',
          dim: '#475569',
        },
        // Accent colours
        coral: '#f4845f',
        amber: '#f5b730',
        teal: '#2dd4bf',
        violet: '#a78bfa',
        sage: '#6ee7b7',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px 0 rgba(0,0,0,0.35)',
        'card-hover': '0 8px 40px 0 rgba(0,0,0,0.5)',
        'glow-coral': '0 0 24px rgba(244,132,95,0.25)',
        'glow-teal': '0 0 24px rgba(45,212,191,0.2)',
      },
    },
  },
  plugins: [],
};
