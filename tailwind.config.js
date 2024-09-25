const { screens } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["presets/**/*.{js,vue,ts}"],
  theme: {
    screen: {
      xs: "480px",
      ...screens,
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
