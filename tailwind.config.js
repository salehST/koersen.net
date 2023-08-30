/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#223255",
        secondary: "#6B6C6F",
        dgray: "#828282",
        lgray: "#E8E8E8",
        cblue: "#0051FF",
        dblue: "#DEE4F1",
        lblue: "#EBEFF5",
      },
      backgroundColor: {
          cblue: "#0051FF",
          lblue: "#EBEFF5",     
      },
    },
  },
  plugins: [],
}