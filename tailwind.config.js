/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: "#0d3b2e", deep: "#082a20", mid: "#14513f" },
        berry: { DEFAULT: "#b8212e", dark: "#951a25" },
        gold: { DEFAULT: "#e0a93b", soft: "#f4db9b" },
        snow: "#faf6ee",
        paper: "#fffdf9",
        ink: "#15251e",
        muted: "#58655e",
        line: "#e6ddcb",
      },
      fontFamily: {
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Bagel Fat One"', "Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(21, 37, 30, 0.04), 0 14px 36px -18px rgba(13, 59, 46, 0.28)",
        lift: "0 24px 60px -24px rgba(13, 59, 46, 0.45)",
      },
    },
  },
  plugins: [],
};
