import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: ["index.html", "bookmarks.html", "tiers.html"],
      output: {
        dir: "./build",
      },
    },
  },
});
