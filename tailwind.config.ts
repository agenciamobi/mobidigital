import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e9ff",
          200: "#bcd8ff",
          300: "#8ec0ff",
          400: "#5a9cff",
          500: "#3177f6",
          600: "#1f5ddd",
          700: "#1c49b3",
          800: "#1d408d",
          900: "#1b376f",
        },
        ink: "#0f172a",
        muted: "#64748b",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.10)",
      },
      borderRadius: {
        xxl: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
