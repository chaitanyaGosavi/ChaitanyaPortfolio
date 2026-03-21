import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        sand: "#FCFBF8",      // background
        cyan: "#023E8A",      // primary text
        teal: "#48CAE4",      // accents / cursor / progress
        card: "#EADDC9",      // cards
        gray: "#5D5D5A",      // secondary text
        dark: "#0A111F",      // buttons / footer
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
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