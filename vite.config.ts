import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rawPort = process.env.PORT ?? "5173";
let port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  port = 5173;
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig(async () => {
  const plugins: any[] = [react(), tailwindcss(), runtimeErrorOverlay()];

  // Load Replit-only plugins only when available and when running in Replit.
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    try {
      const carto = await import("@replit/vite-plugin-cartographer");
      plugins.push(
        carto.cartographer({
          root: path.resolve(__dirname, ".."),
        }),
      );

      const devBanner = await import("@replit/vite-plugin-dev-banner");
      plugins.push(devBanner.devBanner());
    } catch (e) {
      // If the Replit plugins aren't installed, ignore silently.
      // This keeps the config portable across Netlify, Vercel, GitHub Actions, etc.
      // eslint-disable-next-line no-console
      console.warn("Replit plugins not available:", e?.message ?? e);
    }
  }

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(__dirname),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
