/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'uber': "url('/tailwind_projeto2/src/assets/bguber.png')",
        'city': "url('/tailwind_projeto2/src/assets/bg-city.png')",
      }
    },
  },
  plugins: [],
}