module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["plugin:vue/base"],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-path-concat': 'off',
    camelcase: 'off',
    'no-array-constructor': 'off'
  },
  ignorePatterns: [
    './api/*',
    './.github/*'
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2018,
    sourceType: "module"
  }
};