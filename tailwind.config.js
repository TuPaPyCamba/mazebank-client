/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: "#EAECEE",
        MazeRedColor: "#D3272D",
        MazeBarColor: "#CFD0D4",
        MazeBlack:"#1A1B1F"
      },
      width: {
        '55w': '55w',
        '60w': '60%',
        '70w': '70%',
        '80w': '80%',
        '90w': '90%',
        '95w': '95%'
      },
      height: {
        '80': '80%'
      },
      screens: {
        '360': '360px',
        '600': '600px',
        '700' : '700px',
        '850' : '850px',
        '1000': '1000px'
      }
    },
  },
  plugins: [],
}