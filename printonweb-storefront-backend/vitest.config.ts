import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    env: {
      ENABLE_DEMO_MODE: "true",
      NODE_ENV: "test",
    },
    include: ["test/**/*.test.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
    testTimeout: 10000,
  },
});
