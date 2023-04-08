/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
    animation: {
      "spin-slow": "wiggle 3s linear infinite",
    },
    fontFamily: {
      Orbitron: ["Orbitron", "sans-serif"],
      fires: ["TT-Fires", "sans-serif"],
    },

    textColor: {
      black: "#000000",
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
