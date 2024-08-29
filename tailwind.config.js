/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#f5eee4",
        secondaryBackground: "#3a3039",
        primaryFont: "#663c59",
        primaryButton: '#ffddf4',
        primaryOverlay: "#f7d9ee",
        primaryFlareEffect: "#663c59"
      },
    },
  },
  plugins: [],
};
