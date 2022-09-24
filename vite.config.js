import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { url } from "node:inspector";

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 80,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),              // Src
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),    // Bootstrap
      "#": fileURLToPath(new URL("./src/components", import.meta.url)),      // Components
      "$": fileURLToPath(new URL("./src/stores", import.meta.url)),           // Stores
    },
  },
});
