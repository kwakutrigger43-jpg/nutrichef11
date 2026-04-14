/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f7faf5',
          100: '#e8f5e9',
          200: '#d1e8ca',
          300: '#b8dfc5',
          400: '#7aab86',
          500: '#4caf7d',
          600: '#2e7d52',
          700: '#245f3f',
          800: '#1a3a25',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
