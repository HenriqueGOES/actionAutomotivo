/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('/assets/fundo.jpeg')",
        "fund":"url('/assets/fundoazul.jpeg')"
      }
    },
  },
  plugins: [],
}

