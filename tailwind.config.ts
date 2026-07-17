import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfbf5",
          100: "#f7f2e6",
          200: "#efe6cf",
        },
        forest: {
          400: "#5c7a5c",
          500: "#3f5b3f",
          600: "#2f462f",
          700: "#22321f",
          800: "#182417",
        },
        ember: {
          400: "#e0a54a",
          500: "#c8862b",
          600: "#a06a1c",
        },
        clay: {
          500: "#9c5a3c",
          600: "#7d4530",
        },
      },
      fontFamily: {
        display: ["var(--font-kyiv-region)", "Georgia", "serif"],
        sans: ["var(--font-kyiv-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
