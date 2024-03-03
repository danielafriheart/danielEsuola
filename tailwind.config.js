/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "White": "#DBD6CA",
        "Gray": "#969696",
        "Powder": "#DBDFE4",
        "Black": "#1D1D1D",
      },
      fontSize: {
        "Base": '1rem',      // equivalent to 16px
        "Caption": '1.125rem', // equivalent to 18px
        "Label": '1.5rem',    // equivalent to 24px
        "Paragraph-sm": '1.6rem', // equivalent to 26px
        "Paragraph-md": '2rem', // equivalent to 32px
        "Paragraph": '2.5rem', // equivalent to 40px
        "Header-md": '3.25rem',     // equivalent to 52px
        "Header": '5rem',     // equivalent to 64px
      },
    },
  },
  plugins: [],
}