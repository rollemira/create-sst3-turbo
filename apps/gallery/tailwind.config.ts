import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [baseConfig],
  theme: {
    fontFamily: {
      "family-black": ["Geist-Black", "sans-serif"],
      "family-thin": ["Geist-Thin", "sans-serif"],
      "family-light": ["Geist-Light", "sans-serif"],
      "family-normal": ["Geist-Regular", "sans-serif"],
      "family-medium": ["Geist-Medium", "sans-serif"],
      "family-semibold": ["Geist-SemiBold", "sans-serif"],
      "family-bold": ["Geist-Bold", "sans-serif"],
    },
  },
  daisyui: {
    themes: ["cmyk"],
  },
} satisfies Config;
