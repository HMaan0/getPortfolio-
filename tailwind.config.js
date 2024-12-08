/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/ui/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        blink: "blink 1s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      colors: {
        "theme-border": "#747474",
        "theme-bar": "#1B1B1B",
        "theme-button": "#343434",
      },
    },
  },
  plugins: [],
};
