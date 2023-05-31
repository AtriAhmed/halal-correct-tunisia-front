/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        scr600: "600px",
        scr700: "700px",
        scr800: "800px",
        scr900: "900px",
        scr1000: "1000px",
        scr1100: "1100px",
        scr1250: "1250px",
      },
      fontFamily: {
        poppins: "poppins, sans-serif",
        open: "'Open Sans', sans-serif",
        berlin: "Berlin sans FB",
      },
      maxWidth: {
        w1300: "1300px",
      },
    },
  },
  plugins: [],
}
