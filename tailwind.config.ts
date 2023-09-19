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
      dropShadow: {
        "primary-sm": "-16px 32px 0px 0px #DE2D59",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      keyframes: {
        scrollPanel: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollPanelInverse: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        scrollPanel: "scrollPanel 80s linear infinite",
        scrollPanelInverse: "scrollPanelInverse 80s linear infinite",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      screens: {
        'max-h-600': { 'raw': '(max-height: 600px)' },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
export default config;
