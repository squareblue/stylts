/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  ignorePatterns: [".eslintrc.*"],
  extends: ["@local/config-eslint/index.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
