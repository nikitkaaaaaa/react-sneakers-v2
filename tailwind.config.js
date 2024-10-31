/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        sm: "768px",
        xs: "576px",
      },
    },
  },
  plugins: [],
};
