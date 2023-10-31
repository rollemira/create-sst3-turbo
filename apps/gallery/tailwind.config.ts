import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  daisyui: {
    themes: ["cmyk"],
  },
} satisfies Config;
