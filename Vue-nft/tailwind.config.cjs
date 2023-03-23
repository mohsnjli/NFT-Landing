/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Orbitron: ["Orbitron", "sans-serif"],
    },

    textColor: {
      black:"#000000",
      white: "#ffffff",
      orange: {
        first: "#FF1F4C",
        second: "#FF5E35",
      },
    },
    gradientColorStops: {
      orange: {
        first: "#FF1F4C",
        second: "#FF5E35",
      },
    },
  },
  plugins: [],
};
