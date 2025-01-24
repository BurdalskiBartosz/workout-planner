import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          200: "#aaa3ec",
          300: "#8980e5",
          400: "#685cdd",
          500: "#3629b7",
          600: "#2e2291",
          700: "#251b6b",
          800: "#1d1545",
          900: "#140f1f",
        },
        gray: {
          100: "#d9d9d9",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#838383",
          600: "#6b6b6b",
          700: "#525252",
          800: "#3a3a3a",
          900: "#212121",
        },
        red: "#ff0000",
      },
    },
  },
  plugins: [],
} satisfies Config;
