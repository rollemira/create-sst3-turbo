import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [baseConfig],
  daisyui: {
    themes: ["cmyk"],
  },
} satisfies Config;
