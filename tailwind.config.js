/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: "#EAECEE",
      },
      width: {
        '30': '30%'
      },
    },
  },
  plugins: [],
}