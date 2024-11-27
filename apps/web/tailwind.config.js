/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
    "./project/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {

  "theme-border": "#626262",
  "theme-button": "#343434",
  "theme-bar": "#1B1B1B",
  "background": "var(--background)",
  "foreground": "var(--foreground)",
  "theme_bg_light": "#ffffff",
  "theme_bg_dark": "black",
  "primary_dark": "#212121",
  "primary_light": " white",
  "theme_secondary": "#9e2e3b",
  "theme_gradient": "#1d4ed8"

},
    },
  },
  plugins: [],
};
