/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#704FE6',
        'purple-light': '#DEC8FE',
        'yellow': '#FFB802',
        'boxShadow': '#dbcbfb'
      },
      fontFamily: {
        courgette: ['Courgette', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        '112': '112px'
      },
      width: {
        '928': '928px',
        '511': '511px'
      },
    },
  },
  plugins: [],
}