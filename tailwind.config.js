/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "White": "#ffffff",
        "Gray": "#969696",
        "Powder": "#DBDFE4",
        "Black": "#000000",
      },
      fontSize: {
        "Base": '1rem',      // equivalent to 16px
        "Caption": '1.125rem', // equivalent to 18px
        "Label": '1.5rem',    // equivalent to 24px
        "Paragraph-sm": '2rem', // equivalent to 32px
        "Paragraph": '2.5rem', // equivalent to 40px
        "Header-sm": '3.25rem',     // equivalent to 52px
        "Header": '4rem',     // equivalent to 64px
      },
    },
  },
  plugins: [],
}