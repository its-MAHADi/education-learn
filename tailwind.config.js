/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#04A504",
        secondary: "#FF8C00",
        base:"#F3FFF3",
        dark:"#98A2B3",
      }
    },
    container:{
      center:true,
      screens:{
        "2xl":"1100px"
      }
    }
  },
  plugins: [],
}