export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: 'rgba(255,255,255,0.08)',
        surfaceStrong: 'rgba(255,255,255,0.14)',
        accent: '#4FD8FF',
        accentSoft: '#1C4D90',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(79,216,255,0.18)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(79,216,255,0.16), transparent 25%), radial-gradient(circle at 15% 15%, rgba(255,255,255,0.08), transparent 18%)',
      },
    },
  },
  plugins: [],
};
