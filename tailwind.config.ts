import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F5F0',
          panel: '#EFEBE2',
        },
        paper: {
          DEFAULT: '#0B0A09',
          dim: '#4A453D',
        },
        champagne: {
          DEFAULT: '#7A5D2B',
          bright: '#B79458',
          dim: '#5C4620',
        },
        // Fixed colors for the RoomExperience hero only: it composites
        // captions over real photos using a dark scrim + light text
        // technique that must stay dark/light regardless of the site's
        // overall theme (see RoomExperience.tsx).
        heroDark: '#0B0A09',
        heroLight: '#F3EEE4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
