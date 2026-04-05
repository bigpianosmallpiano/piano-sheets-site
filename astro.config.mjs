// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ── Replace with your actual domain once live ──────────────────────────────
  site: "https://bigpianosmallpiano.com",

  integrations: [
    tailwind(),
    sitemap(),   // auto-generates /sitemap-index.xml — submit to Google Search Console
  ],

  // Static output = fastest possible pages, best Core Web Vitals
  output: "static",

  // Compress HTML for slightly smaller payloads
  compressHTML: true,

  build: {
    // Inline tiny stylesheets to avoid render-blocking requests
    inlineStylesheets: "auto",
  },

  vite: {
    build: {
      // Raise the chunk-size warning threshold (Astro is already optimal,
      // this just silences noisy CI logs)
      chunkSizeWarningLimit: 600,
    },
  },
});
