/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],

  env: {
    node: true,
    'jest/globals': false
  },

  plugins: ['jest', 'jest-dom'],

  // We're using Vitest which has a very similar API to jest (so the linting
  // plugins work nicely), but it means we have to explicitly set the jest version.
  settings: {
    jest: {
      version: 28
    }
  },

  rules: {
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-mocks-import': 'error',
    'jest/valid-describe-callback': 'error',
    // Incompatible with Vitest
    'jest/valid-expect': 'off',
    'jest/valid-expect-in-promise': 'error',

    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-empty': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-focus': 'error',
    'jest-dom/prefer-in-document': 'off',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
    'jest-dom/prefer-to-have-class': 'error',
    'jest-dom/prefer-to-have-style': 'error',
    'jest-dom/prefer-to-have-text-content': 'error',
    'jest-dom/prefer-to-have-value': 'error'
  }
}
