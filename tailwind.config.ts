import type { Config } from "tailwindcss";
import { mobiBoxShadow, mobiTailwindColors } from "./lib/design-tokens";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: mobiTailwindColors,
      boxShadow: mobiBoxShadow,
      borderRadius: {
        xxl: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
