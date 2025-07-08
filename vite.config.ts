import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
        type: "module",
      },
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Notes247",
        short_name: "Notes247",
        description: "Simpan Catatanmu",
        theme_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/pwa192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/ss1.png",
            sizes: "2798x1742",
            form_factor: "wide",
          },
          {
            src: "/screenshots/ss2.png",
            sizes: "2798x1742",
            form_factor: "wide",
          },
          {
            src: "/screenshots/ss3.png",
            sizes: "463x915",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/ss4.png",
            sizes: "463x915",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/ss5.png",
            sizes: "463x915",
            form_factor: "narrow",
          },
        ],
      },
    }),
  ],
});
