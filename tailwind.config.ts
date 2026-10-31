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
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        serif: [
          '"Lora"',
          '"Merriweather"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
      },
      colors: {
        academic: {
          navy: {
            50: "#f0f5fc",
            100: "#e0ebf9",
            200: "#c7dcf3",
            300: "#9fc3eb",
            400: "#6fa4df",
            500: "#4884d2",
            600: "#3267be",
            700: "#2852a4",
            800: "#1e3e7f",
            900: "#0b2545", // Official deep academic navy
            950: "#07162b",
          },
          gold: {
            50: "#fdfbf3",
            100: "#faf4e2",
            200: "#f4e6be",
            300: "#ebd193",
            400: "#deb563",
            500: "#c59b27", // Official academic crest gold
            600: "#b0851f",
            700: "#8c6519",
            800: "#735119",
            900: "#604319",
          },
          parchment: {
            50: "#fcfbf9",
            100: "#f7f5f0",
            200: "#efece3",
            300: "#e2ddcf",
            400: "#cfc7b3",
          },
        },
        ut: {
          blue: "#0b2545",
          gold: "#c59b27",
          dark: "#07162b",
          light: "#f0f5fc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
