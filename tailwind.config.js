/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ebony: '#1B130E',
        chocolate: '#3B2A20',
        espresso: '#5C4033',
        mocha: '#7B5E48',
        taupe: '#A88A6E',
        sand: '#D9C5AE',
        cream: '#F4ECDF',
        ivory: '#FAF6EF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(27, 19, 14, 0.35)',
        inset: 'inset 0 0 80px rgba(27, 19, 14, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out both',
        'fade-up': 'fadeUp 1s ease-out both',
        'slow-zoom': 'slowZoom 12s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
