/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueish: "#000C21",
        redish: "#EA001E"
      },
      animation: {},
      keyframes: {
        "end-left": {}
      }
    }
  },
  plugins: []
};
