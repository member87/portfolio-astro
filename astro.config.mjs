import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";
import { remarkReadingTime } from "./src/remark-reading-time.mjs";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  site: "https://jackhumes.com",
  integrations: [mdx(), sitemap(), icon()],

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      themes: {
        dark: "material-theme-darker",
        light: "catppuccin-latte",
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});