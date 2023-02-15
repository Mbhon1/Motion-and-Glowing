/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        glow: {
          from: {
            textShadow:
              " 0 10px #000000, 0 0 20px #000000, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073",
          },
          to: {
            textShadow:
              "0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6",
          },
        },
      },
    },
    colors: {
      color1: "#fff",
      color2: "#e60073",
      color3: "#ff4da6",
    },
  },
  plugins: [],
};
