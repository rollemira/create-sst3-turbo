import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config/mobile";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
