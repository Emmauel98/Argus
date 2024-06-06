/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      LufgaBold: ["LufgaBold", "sans-serif"],
      LufgaRegular: ["LufgaRegular", "sans-serif"],
      LufgaMedium: ["LufgaMedium", "sans-serif"],
      LufgaLight: ["LufgaLight", "sans-serif"],
      LufgaSemiBold: ["LufgaSemiBold", "sans-serif"],
    },
  },
  plugins: [],
};
