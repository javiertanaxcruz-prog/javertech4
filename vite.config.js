import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rawPort = process.env.PORT ?? "5173";
let port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  port = 5173;
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig(async () => {
  const plugins = [react(), tailwindcss()];

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(__dirname),
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
  };
});