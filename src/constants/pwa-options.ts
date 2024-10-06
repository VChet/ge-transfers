import type { ManifestOptions, VitePWAOptions } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  name: "Переводы в Грузию",
  short_name: "Переводы в Грузию",
  id: "ge-transfers",
  description: "Доступные способы денежных переводов в Грузию",
  dir: "ltr",
  orientation: "portrait",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  icons: [
    { src: "icon-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "icon-512x512.png", sizes: "512x512", type: "image/png" },
    { src: "icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
  ]
};

const pwaOptions: Partial<VitePWAOptions> = {
  base: "/",
  strategies: "injectManifest",
  srcDir: "src",
  filename: "sw.ts",
  includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
  manifest,
  workbox: { sourcemap: true }
};

export default pwaOptions;
