import defaultTheme from 'tailwindcss/defaultTheme'

const rgb = (name) => `rgb(var(--${name}) / <alpha-value>)`
const tone = (name) => ({ DEFAULT: rgb(name), ink: rgb(`${name}-ink`) })

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: rgb('paper'),
        soft: rgb('soft'),
        surface: rgb('surface'),
        ink: rgb('ink'),
        muted: rgb('muted'),
        line: rgb('line'),
        night: rgb('night'),
        bleu: tone('bleu'),
        rouge: tone('rouge'),
        jaune: tone('jaune'),
        vert: tone('vert'),
        violet: tone('violet'),
        turquoise: tone('turquoise'),
        orange: tone('orange'),
      },
      keyframes: {
        // Onde qui s'élargit autour des bulles « en cours ».
        bubble: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '80%, 100%': { transform: 'scale(2.8)', opacity: '0' },
        },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        aurora: {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '100%': { transform: 'translate3d(6%,4%,0) scale(1.15)' },
        },
      },
      animation: {
        bubble: 'bubble 2.2s cubic-bezier(0, 0, 0.2, 1) infinite',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite alternate',
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', 'Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
