import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        xs: "1rem",
        sm: "0.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        ban: {
          primary: "#23A6F0",
          light: "#FFFFFF",
          muted: "#BDBDBD",
          secondary: "#23856D",
          txt: "#252B42",
          secondtxt: "#737373",
        },
      },
    },
  },
  plugins: [],
};
export default config;
