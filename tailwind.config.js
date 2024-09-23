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
        secondaryBackground: "#fedcf4",
        tertiaryBackground: "#e5bae7",
        quaternaryBackground: "#b783a7",
        quinaryBackground: "#f8e9f3",

        primaryFont: "#663c59",
        primaryButton: "#ffddf4",
        
        primaryOverlay: "#f7d9ee",
        primaryGradientOverlay: "#663c59",

        primaryLight: '#F8F4F1',
        secondaryLight: "#F9F9F9",
        tertiaryLight: "#DFDFDF",
        quaternaryLight: "#D7D7D7",
      },
    },
  },
  plugins: [],
};
