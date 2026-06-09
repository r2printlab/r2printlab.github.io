/** @type {import('tailwindcss').Config} */
export default {
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
