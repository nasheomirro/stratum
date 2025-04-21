import { defineConfig } from "vite";
import { basename, dirname, join } from "node:path";
import { glob } from "tinyglobby";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    cssMinify: false,
    lib: {
      formats: ["es"],
      entry: {
        index: "src/index.css",
        ...Object.fromEntries(
          (await glob("./src/themes/*.{css,scss}")).map((path) => {
            const directory = basename(dirname(path));
            const filename = basename(path);
            return [join(directory, filename), path];
          })
        ),
        ...Object.fromEntries(
          (await glob("./src/presets/**/index.{css,scss}")).map((path) => {
            const directory = basename(dirname(path));
            return [join("presets", `${directory}.css`), path];
          })
        ),
      },
    },
  },
});
