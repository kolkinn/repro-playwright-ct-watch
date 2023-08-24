/* eslint-disable @typescript-eslint/ban-ts-comment */

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
/** @type import("vitest/config").UserConfigExport  */
const config = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["@robim/test-utils/vitest-setup"],
    include: ["**/?(*.)test.?(c|m)[jt]s?(x)"],
  },
};

export default config;
