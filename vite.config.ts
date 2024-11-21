/// <reference types="vitest" />
/// <reference types="vite/client" />

import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals} from "@remix-run/node";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

installGlobals()

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [remix({
      ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
    }),
    tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
    include: ["./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
