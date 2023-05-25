/// <reference types="vitest" />
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

//how to get setup and configure
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    framework: "vitest",
    globals: true,
    environment: "jsdom",
  },
});
