/// <reference types="vitest/config" />
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/storybook-static/**",
      "**/src/stories/**", // Exclude Storybook stories from regular tests
      "**/*.stories.{js,jsx,ts,tsx}", // Exclude all story files
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/test/",
        "src/stories/", // Exclude stories from coverage
        "**/*.d.ts",
        "**/*.config.*",
        "**/*.stories.*",
        "dist/",
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/components": resolve(__dirname, "./src/components"),
      "@/hooks": resolve(__dirname, "./src/hooks"),
      "@/context": resolve(__dirname, "./src/context"),
      "@/utils": resolve(__dirname, "./src/utils"),
      "@/types": resolve(__dirname, "./src/types"),
      "@/features": resolve(__dirname, "./src/features"),
      "@/assets": resolve(__dirname, "./src/assets"),
    },
  },
});
