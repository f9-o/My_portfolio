/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crm: { // Control Room
          bg: '#050505',
          panel: '#0A0B10',
          border: '#1A1C25',
          blue: '#00F0FF',
          orange: '#FF5E00',
          green: '#00FF9D',
          dim: '#4A4C55'
        }
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'], // Technical look as primary
        mono: ['JetBrains Mono', 'monospace'],
        cairo: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint': "linear-gradient(to right, #1A1C25 1px, transparent 1px), linear-gradient(to bottom, #1A1C25 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-scroll': 'grid-scroll 20s linear infinite',
      },
      keyframes: {
        'grid-scroll': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        }
      }
    },
  },
  plugins: [],
}
