import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;