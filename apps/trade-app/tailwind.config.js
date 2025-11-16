/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#7c3aed",
          600: "#6d28d9"
        },
        fuchsia: {
          500: "#d946ef",
          600: "#c026d3"
        }
      }
    }
  },
  plugins: []
};
