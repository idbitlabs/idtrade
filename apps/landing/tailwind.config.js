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
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        slowSlideDown: "slowSlideDown 0.5s ease-out"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        slowSlideDown: {
          "0%": { transform: "translateY(-8px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
