/**
 * This is a Node-specific config (without React).
 */

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: true
  },

  env: {
    browser: false,
    node: true,
    es6: true
  },

  extends: ['./config/core'].map(require.resolve),

  overrides: [
    './config/typescript',
    './config/imports',
    './config/tests',
    './config/prettier'
  ].map(require),

  ignorePatterns: ['**/node_modules/**', '**/build/**', '**/dist/**'],

  rules: {}
}
