import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "material-theme-darker",
        light: "catppuccin-latte",
      },
    },
  },
});
