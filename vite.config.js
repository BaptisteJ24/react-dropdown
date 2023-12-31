import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      dedupe: ["react", "react-dom"],
      build: {
        outDir: "dist",
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
      plugins: [react()],
    };
  }

  if (mode === "demo") {
    return {
      build: {
        outDir: "distdemo",
      },
      plugins: [react()],
    };
  }
  return {
    plugins: [react()],
  };
});
