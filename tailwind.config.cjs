/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#88BFA0",
        primary100: "#D6E9DE",
        primary200: "#ACD2BD",
        primary300: "#64AC83",
        primary400: "#4F936C",
        primary500: "#427A5A",
        komplimenter: "#733F3B",
        komplimenter100: "#BF8C88",
        
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
