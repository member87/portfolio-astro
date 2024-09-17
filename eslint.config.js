import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  eslintConfigPrettier,
];
