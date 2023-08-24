// Rules that has to configured with JavaScript to work properly.
module.exports = {
  plugins: ["filename-rules"],
  rules: {
    "filename-rules/match": ["error", /^[a-z]([a-z0-9]+-)*[a-z0-9]+(?:\..*)?$/], // kebab-case with numbers
  },
};
