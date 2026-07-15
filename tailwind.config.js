/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B1220',
          900: '#0F1621',
          800: '#141C29',
          700: '#1C2733',
          600: '#2A3844',
        },
        signal: {
          DEFAULT: '#00D4FF',
          dim: '#0099FF',
        },
        zalo: {
          DEFAULT: '#0068FF',
          dim: '#3A6FD8',
        },
        brandGreen: '#22C55E',
        mist: '#8B98A1',
        paper: '#E6EAF2',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        typeIn: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
