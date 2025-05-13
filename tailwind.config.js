module.exports = {
  content: [
    "./globals.css",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-light": "#FFDAB3",
        "brand":       "#FF8C00",
        "brand-dark":  "#E67300",
        "brand-black": "#000000",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}