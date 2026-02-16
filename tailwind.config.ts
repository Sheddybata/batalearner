import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#682f63",
          dark: "#712c6a",
          light: "#8a3d7f",
        },
      },
      spacing: {
        "touch-target": "48px",
      },
    },
  },
  plugins: [],
};
export default config;
