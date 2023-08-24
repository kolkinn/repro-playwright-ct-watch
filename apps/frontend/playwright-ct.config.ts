/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig, devices } from "@playwright/experimental-ct-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";
import type { InlineConfig } from "vite";


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Directory that will be recursively scanned for test files. */
  testDir: "../../",
  /* Files matching one of these patterns are not executed as test files. */
  testIgnore: [
    // For the apps directory, only allow tests within the 'frontend' directory.
    // Future apps, like a separate E2E app, should not be included.
    "apps/!(frontend)/**/*",
    // Only look in the 'apps' and 'libs' directories
    /^(?!.*\b(apps|libs)\b).*$/i,
  ],
  /* Only the files matching one of these patterns are executed as test files */
  testMatch: "**/*.spec.?(c|m)[jt]s?(x)",
  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: "./__snapshots__",
  /* Maximum time one test can run for. */
  timeout: 10 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? "blob" : "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,

    ctViteConfig: {
      plugins: [react()],
      css: {
        modules: {
          // If you change this, please also change the corresponding
          // settings for ESLint rules `css-modules/*`
          localsConvention: "dashesOnly",
        },
      },
    } satisfies InlineConfig,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
