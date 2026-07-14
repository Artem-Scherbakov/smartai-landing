/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0F12',
          900: '#0F1417',
          800: '#151B1F',
          700: '#1D252B',
          600: '#2A343B',
        },
        signal: {
          DEFAULT: '#FFB020',
          dim: '#B87E17',
        },
        zalo: {
          DEFAULT: '#0068FF',
          dim: '#3A6FD8',
        },
        mist: '#8B98A1',
        paper: '#EDEFF1',
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
