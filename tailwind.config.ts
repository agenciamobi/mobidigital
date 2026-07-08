import type { Config } from "tailwindcss";
import {
  mobiAnimation,
  mobiBorderRadius,
  mobiBoxShadow,
  mobiKeyframes,
  mobiTailwindColors,
} from "./lib/design-tokens";

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
      keyframes: mobiKeyframes,
      animation: mobiAnimation,
    },
  },
  plugins: [],
};

export default config;
