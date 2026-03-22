import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ REQUIRED

  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // 🌞 LIGHT (keep minimal, fallback only)
        sand: "#FCFBF8",
        cyan: "#023E8A",
        teal: "#48CAE4",
        card: "#EADDC9",
        gray: "#5D5D5A",
        dark: "#0A111F",

        // 🌙 DARK THEME (PRIMARY SYSTEM)
        bg: "#0A111F",              // background
        surface: "#111827",         // cards
        textPrimary: "#d2d3d4",     // main text
        textSecondary: "#9CA3AF",   // muted text
        accent: "#48CAE4",          // highlight
        borderSubtle: "rgba(255,255,255,0.08)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
        glass: "0 8px 32px rgba(0,0,0,0.25)", // ✅ glass feel
      },

      backdropBlur: {
        xs: "2px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },

  plugins: [],
};

export default config;