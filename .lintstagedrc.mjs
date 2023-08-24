import { ESLint } from "eslint";

// From https://github.com/okonet/lint-staged#how-can-i-ignore-files-from-eslintignore
const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    })
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(" ");
};

export default {
  "*": "prettier --ignore-unknown --write",
  "*.scss": "stylelint --fix --max-warnings 0",

  // ESLint will warn if it receives a file that is ignored in .eslintignore.
  // And since we use --max-warnings 0, it would fail.
  "*.{js,cjs,mjs,jsx,ts,tsx}": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --fix --max-warnings 0 ${filesToLint}`];
  },
};
