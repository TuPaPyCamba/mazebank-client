/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: "#EAECEE",
        MazeRedColor: "#D3272D",
        MazeGrayback: "#D6D6D8",
        MazeBarColor: "#CFD0D4",
        MazeBlack: "#1A1B1F",
        MazeGray: "#E8E8E8"
      },
      width: {
        '55w': '55w',
        '60w': '60%',
        '70w': '70%',
        '80w': '80%',
        '85w': '85%',
        '90w': '90%',
        '95w': '95%',
        '100w' : '100%'
      },
      height: {
        '80': '80%',
        '100h' : '100%'
      },
      screens: {
        '360': '360px',
        '600': '600px',
        '700' : '700px',
        '850' : '850px',
        '900' : '900px',
        '1000': '1000px',
        "1400": "1400px"
      }, 
      backgroundImage: {
        "MazeBank-red-gradient": "linear-gradient(90deg, #79071a 0%, #D30000 100%)",
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto'
      },
      boxShadow: {
        chart: "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
      }
    },
  },
  plugins: [],
}