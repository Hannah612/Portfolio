/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-red":"#765D69",
        "coral":"#F1828D",
        "light-pink":"#FCD0BA",
        "light-yellow":"#FEFAD4",
        "pale-green":"#8FB9A8",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
    },
    screens: { 
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
};