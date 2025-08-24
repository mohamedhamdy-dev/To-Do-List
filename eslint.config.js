import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      // ✅ Base JavaScript recommended rules
      ...js.configs.recommended.rules,

      // ✅ React recommended rules
      ...reactPlugin.configs.flat.recommended.rules,

      // ✅ React Hooks recommended rules
      ...reactHooks.configs.recommended.rules,

      // 🚫 Not needed in React 17+ (Vite handles JSX transform)
      "react/react-in-jsx-scope": "off",
      "react/prop-types": [0],
    },
    settings: {
      react: {
        version: "detect", // auto-detect React version
      },
    },
  },
]);
