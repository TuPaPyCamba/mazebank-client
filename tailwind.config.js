/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: "#EAECEE",
        MazeRedColor: "#D3272D",
        MazeBarColor: "#CFD0D4"
      },
      width: {
        '60': '60%',
        '80': '80%'
      }
    },
  },
  plugins: [],
}