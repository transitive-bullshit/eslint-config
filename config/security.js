/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['security'],

  extends: ['plugin:security/recommended-legacy'],

  rules: {
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-object-injection': 'off'
  }
}
