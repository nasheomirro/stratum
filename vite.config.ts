import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    cssMinify: false,
    lib: {
      formats: ["es"],
      entry: 'src/index.css'
    }
  }
})