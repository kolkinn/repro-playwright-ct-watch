import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
// @ts-ignore
import defaultTestConfig from "@demo/test-utils/vitest-config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // If you change this, please also change the corresponding
      // settings for ESLint rules `css-modules/*`
      localsConvention: "dashesOnly",
    },
  },
  test: defaultTestConfig.test,
});
