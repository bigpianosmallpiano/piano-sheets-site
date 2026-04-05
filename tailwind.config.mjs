// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Piano palette ──────────────────────────────────────────────
        ivory:  "#F8F5EE",         // warm white — like piano keys
        ebony:  "#0D0D0D",         // near-black — like the body of a grand
        gold: {
          DEFAULT: "#C9A84C",      // aged gold
          light:   "#E8CC80",      // highlight
          dark:    "#8C6A1F",      // deep gold for hover states
          subtle:  "#2A2010",      // dark gold tint for backgrounds
        },
        surface: {
          DEFAULT: "#141414",      // card background
          raised:  "#1C1C1C",      // slightly elevated surface
          border:  "#2A2A2A",      // subtle border on dark bg
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],   // headings
        body:    ["'DM Sans'", "system-ui", "sans-serif"],     // body text
        mono:    ["'DM Mono'", "monospace"],
      },
      backgroundImage: {
        // Subtle diagonal key-pattern used in hero sections
        "keys-pattern":
          "repeating-linear-gradient(90deg, transparent 0px, transparent 18px, rgba(201,168,76,0.04) 18px, rgba(201,168,76,0.04) 20px)",
      },
      boxShadow: {
        "gold-glow": "0 0 24px rgba(201,168,76,0.18)",
        "card":      "0 2px 12px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-up":   "fadeUp 0.5s ease forwards",
        "shimmer":   "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
