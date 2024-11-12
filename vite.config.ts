import { vitePlugin as remix } from "@remix-run/dev";
import {installGlobals} from "@remix-run/node";
import react from "@vitejs/plugin-react";
import {defineConfig, loadEnv} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals()

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    !process.env.VITEST ? remix({
      ignoredRouteFiles: ["**/*.css"],
      future: {
        v3_fetcherPersist : true,
        v3_lazyRouteDiscovery : true,
        v3_relativeSplatPath : true,
        v3_singleFetch : true,
        v3_throwAbortReason : true,
        unstable_optimizeDeps : true,
      }
    }) : react(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    // Additionally, this is to load ".env.test" during vitest
    env: loadEnv("test", process.cwd(), ""),
    setupFiles: ["./test/setup-test-env.ts"],
    include: ["./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
