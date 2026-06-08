/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#211c19",
        paper: "#fffaf3",
        clay: "#f97316",
        honey: "#facc15",
        skyshop: "#38bdf8",
        grape: "#8b5cf6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(33, 28, 25, 0.10)",
        lift: "0 24px 70px rgba(249, 115, 22, 0.16)",
      },
    },
  },
  plugins: [],
};
