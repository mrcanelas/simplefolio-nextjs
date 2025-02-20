import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#712F26",
        secondary: "#8c8c8c",
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
