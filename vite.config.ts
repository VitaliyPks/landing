import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      context: resolve(__dirname, "./src/context"),
      "@": resolve(__dirname, "./src/"),
      "@app": resolve(__dirname, "./src/app"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@features": resolve(__dirname, "./src/features"),
      "@widgets": resolve(__dirname, "./src/widgets"),
    },
  },
  build: {
    outDir: "build",
  },
  base: "/landing/",
});
