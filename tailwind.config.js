/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d1c7',
          300: '#a3b3a3',
          400: '#7d917d',
          500: '#607460',
          600: '#4c5d4c',
          700: '#404d40',
          800: '#363f36',
          900: '#2f352f',
        },
        earth: {
          50: '#f9f6f2',
          100: '#f0e8dd',
          200: '#e1ccb6',
          300: '#d0aa89',
          400: '#c08865',
          500: '#b3714d',
          600: '#a35f43',
          700: '#874b39',
          800: '#6d3e33',
          900: '#59352d',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};