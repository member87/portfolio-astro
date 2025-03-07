import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import { remarkReadingTime } from "./src/remark-reading-time.mjs";

export default defineConfig({
  output: "static",
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      themes: {
        dark: "material-theme-darker",
        light: "catppuccin-latte",
      },
    },
  },
});
