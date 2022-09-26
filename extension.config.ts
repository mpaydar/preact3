import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        background: "src/extensionConfig/background.ts",
        contentScript: "src/extensionConfig/contentScript.ts",
      },
      output: {
        entryFileNames: "[name].js",
        dir: "./build",
      },
    },
  },
});
