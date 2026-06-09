/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1f4564",
        brandDark: "#143047",
        mist: "#e8f0f6",
        textMain: "#111111",
        textMuted: "#5f6b76",
        paper: "#f7f9fb",
        surface: "#ffffff",
        darkBg: "#071018",
        darkCard: "#0f1b26",
        darkCardAlt: "#122538",
        darkText: "#f7f9fb",
        darkMuted: "#b7c3ce",
        darkAccent: "#7fb0d6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(20, 48, 71, 0.09)",
        lift: "0 24px 70px rgba(31, 69, 100, 0.16)",
      },
    },
  },
  plugins: [],
};
