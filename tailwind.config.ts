import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBE4EA",
          100: "#F6BBCB",
          200: "#F08FAA",
          300: "#E96488",
          400: "#E34670",
          500: "#DE2D59",
          600: "#CD2956",
          700: "#B82552",
          800: "#A3214E",
          900: "#7F1846",
        },
      },
    },
  },
  plugins: [],
};
export default config;
