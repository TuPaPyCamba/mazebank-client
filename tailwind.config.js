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
        '30': '30%'
      },
      backgroundImage: {
        'MazeTheme': "url('./src/assets/#e2e6e5.png')"
      }
    },
  },
  plugins: [],
}