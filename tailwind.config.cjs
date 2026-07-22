/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF6EF',
        surface: '#FFFFFF',
        'surface-warm': '#F3EEE3',
        border: '#E4DCC9',
        'text-primary': '#1F2B22',
        'text-muted': '#6B7566',
        'brand-green': '#2F4A3A',
        'brand-green-dark': '#1C2E22',
        'accent-amber': '#E08E45',
        'accent-clay': '#D97D6C',
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
