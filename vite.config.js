import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  dedupe: ["react", "react-dom"],
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, "lib/Main"),
      name: "react-dropdown",
      fileName: (format) => `react-dropdown.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), cssInjectedByJsPlugin()],
});
