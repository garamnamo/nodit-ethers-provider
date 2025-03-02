import eslintJs from "@eslint/js";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginSonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import typescriptEslint from "typescript-eslint";

/** @type {import("typescript-eslint").TSESLint.ConfigArray} */
const config = typescriptEslint.config(
  eslintJs.configs.recommended,
  typescriptEslint.configs.recommended,
  {
    ...eslintPluginJest.configs["flat/recommended"],
    files: ["*.spec.ts"],
  },
  {
    plugins: { "simple-import-sort": eslintPluginSimpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  eslintPluginSonarjs.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  eslintPluginPrettierRecommended,
);

export default config;
