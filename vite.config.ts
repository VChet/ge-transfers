import { execSync } from "node:child_process";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import PWA_OPTIONS from "./src/constants/pwa-options";

const transfersUpdate = execSync("git log -1 --format=%cI src/assets/transfers.ts").toString().trimEnd();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(PWA_OPTIONS)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
      }
    }
  },
  define: {
    "import.meta.env.VITE_TRANSFERS_UPDATE": JSON.stringify(transfersUpdate)
  },
  server: {
    port: 7100
  }
});
