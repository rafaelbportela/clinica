import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "#fbf8f1",
        linen: "#efe6d7",
        sage: "#9dae96",
        moss: "#62765e",
        mist: "#d9edf0",
        skysoft: "#93b9c9",
        ink: "#24312d",
        clay: "#b89076"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(71, 86, 75, 0.14)",
        lift: "0 18px 42px rgba(36, 49, 45, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
