/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      theme: {
        spacing: {
          96: "800px",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
