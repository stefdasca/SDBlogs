module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-light": "#F6F1E9",
        "brand":       "#FF8400",
        "brand-dark":  "#E67300",
        "brand-black": "#000000",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};