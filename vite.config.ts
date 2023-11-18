import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath, URL } from "node:url";
import type { VitePWAOptions } from "vite-plugin-pwa";

const pwaOptions: Partial<VitePWAOptions> = {
  base: "/",
  strategies: "injectManifest",
  srcDir: "src",
  filename: "sw.ts",
  includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
  manifest: {
    name: "Переводы в Грузию",
    short_name: "Переводы в Грузию",
    description: "Доступные способы денежных переводов в Грузию",
    icons: [
      {
        src: "icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  },
  workbox: { sourcemap: true }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "https://playground1.vps.webdock.cloud/getransfers/dyn",
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true
      }
    }
  }
});
