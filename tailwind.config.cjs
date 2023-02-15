/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {},
    },
    colors: {
      color1: "#fff",
      color2: "#e60073",
      color3: "#ff4da6",
    },
  },
  plugins: [],
};
