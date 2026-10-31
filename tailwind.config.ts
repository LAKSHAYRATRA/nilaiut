import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          '"Plus Jakarta Sans"',
          'sans-serif',
        ],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          dark: "#0F172A",
          charcoal: "#1E293B",
          body: "#334155",
          muted: "#64748B",
          light: "#F8FAFC",
          border: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
