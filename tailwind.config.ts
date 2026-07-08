import type { Config } from "tailwindcss";
import { mobiBorderRadius, mobiBoxShadow, mobiTailwindColors } from "./lib/design-tokens";

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
      borderRadius: mobiBorderRadius,
    },
  },
  plugins: [],
};

export default config;
