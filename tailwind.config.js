/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F7F1E8',
        ivory: '#FFF9F0',
        terracotta: '#B86B4B',
        wood: '#8B5E3C',
        espresso: '#2F2119',
        gold: '#C39A4D',
        taupe: '#D4C0AA',
        sage: '#72836B',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(47, 33, 25, 0.16)',
        soft: '0 16px 40px rgba(47, 33, 25, 0.12)',
      },
      backgroundImage: {
        radialWarm:
          'radial-gradient(circle at top left, rgba(195, 154, 77, 0.22), transparent 38%), radial-gradient(circle at bottom right, rgba(184, 107, 75, 0.18), transparent 30%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
