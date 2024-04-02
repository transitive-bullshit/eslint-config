/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['unicorn'],

  extends: ['plugin:unicorn/recommended'],

  rules: {
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err'
      }
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/no-zero-fractions': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-switch': 'off',
    'unicorn/no-lonely-if': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/no-array-callback-reference': 'off'
  }
}
