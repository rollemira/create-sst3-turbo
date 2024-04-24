import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext", //browsers can handle the latest ES features
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // if (id.includes("node_modules"))
          //   return id
          //     .toString()
          //     .split("node_modules/")[1]
          //     .split("/")[0]
          //     .toString();
          if (id.includes("libphonenumber")) {
            return "libphonenumber";
          } else if (id.includes("lottie")) {
            return "lottie";
          } else if (id.includes("node_modules")) {
            return "vendor"; // all other package goes here
          }
        },
      },
    },
  },
  esbuild: {
    supported: {
      "top-level-await": true, //browsers can handle top-level-await features
    },
  },
  plugins: [
    react(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
});
