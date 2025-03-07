import { defineConfig } from "eslint-define-config";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  // Base recommended configuration
  ...eslintPluginAstro.configs.recommended,

  // Custom rules and file-specific configuration
  {
    files: ["**/*.astro"],
    processor: "astro/client-side-ts",
    rules: {
      // Add your rules for .astro files here
    },
  },
]);
