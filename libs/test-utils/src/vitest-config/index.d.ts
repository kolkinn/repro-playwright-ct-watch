import type { UserConfigExport } from "vitest/config";

// For some reason, vite / vitest doesn't support importing from modules in vite[est].config.ts.
// This d.ts-file is only used for the types, whereas the .mjs file is the one that is actually used.

const typedConfig: UserConfigExport;

export default typedConfig;
