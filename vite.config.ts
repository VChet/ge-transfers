import { URL, fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA, type VitePWAOptions } from "vite-plugin-pwa";

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
    theme_color: "#ffffff",
    background_color: "#ffffff",
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

const transfersUpdate = execSync("git log -1 --format=%cI src/assets/transfers.ts").toString().trimEnd();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  define: {
    "import.meta.env.VITE_TRANSFERS_UPDATE": JSON.stringify(transfersUpdate)
  },
  server: {
    port: 7100
  }
});
