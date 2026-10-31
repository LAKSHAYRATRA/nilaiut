import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        ut: {
          blue: "#002D72",      // Official UT Reflex Blue
          "blue-hover": "#002257",
          "blue-light": "#E8EEF8",
          gold: "#FFC72C",      // Official UT Gold / Yellow
          "gold-hover": "#E5B220",
          "gold-light": "#FFF7DF",
          bg: "#F4F6F9",        // Recommended clean Light Slate/Gray background
          dark: "#0F172A",      // Crisp Slate Dark Black heading
          muted: "#475569",     // Muted Slate Charcoal body text
        },
      },
    },
  },
  plugins: [],
};
export default config;
