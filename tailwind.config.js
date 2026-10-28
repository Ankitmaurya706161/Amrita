/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sapphire: {
          950: '#020612',
          900: '#060D24',
          850: '#0A1438',
          800: '#0E1D4E',
          700: '#15296D',
          600: '#1D3B8E',
          500: '#2563EB',
          400: '#3B82F6',
          300: '#60A5FA',
        },
        midnight: {
          950: '#02050E',
          900: '#050B1D',
          800: '#09122D',
          700: '#0E1A3F',
          600: '#152456',
        },
        gold: {
          100: '#FFFDF5',
          200: '#FDF6D8',
          300: '#F9E79F',
          400: '#F6D77D',
          500: '#E5B643',
          600: '#D4AF37',
          700: '#B8860B',
          800: '#996515',
        },
        celestial: {
          50: '#F8FAFC',
          100: '#F0F9FF',
          200: '#E0F2FE',
          300: '#BAE6FD',
          400: '#7DD3FC',
          500: '#38BDF8',
          600: '#0284C7',
        },
        cream: {
          50: '#FCFAF6',
          100: '#F8F6F0',
          200: '#EFECE2',
          300: '#E2DEC9',
        },
        wine: {
          900: '#2A0612',
          800: '#3E091B',
          700: '#5A0C26',
        },
        roseGold: {
          200: '#F7D0C8',
          300: '#EFA698',
          400: '#E8A598',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'moon-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 40px rgba(246, 215, 125, 0.45)) drop-shadow(0 0 80px rgba(56, 189, 248, 0.25))' },
          '50%': { filter: 'drop-shadow(0 0 65px rgba(246, 215, 125, 0.7)) drop-shadow(0 0 110px rgba(56, 189, 248, 0.4))' },
        },
        'diya-flame': {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.95' },
          '25%': { transform: 'scale(1.08, 0.95) rotate(1.5deg)', opacity: '1' },
          '50%': { transform: 'scale(0.96, 1.05) rotate(-2deg)', opacity: '0.9' },
          '75%': { transform: 'scale(1.05, 1.02) rotate(1deg)', opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      },
      animation: {
        'moon-glow': 'moon-glow 4s ease-in-out infinite',
        'diya-flame': 'diya-flame 1.5s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 4s infinite linear',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
