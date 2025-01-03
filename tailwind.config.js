/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotto: "'Roboto', sans-serif",
        releway: "'Raleway',sans-serif",
        bebas: "'Bebas Neue',sans-serif",
        poppins: "'Poppins', sans-seri",
      },
      colors: {
        primary: "#BD1F17",
        secondury: "#FEBF00",
      },
    },
  },
  plugins: [],
};
