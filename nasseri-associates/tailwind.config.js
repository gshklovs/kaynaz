/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0A7C86",
          secondary: "#0C2D48",
          accent: "#4FC3F7",
          sand: "#F6F1EB"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

