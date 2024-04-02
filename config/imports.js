/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: ['**/*.{ts,tsx,mts,cts}'],

  plugins: ['simple-import-sort', 'import'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      }
    }
  },

  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        // The default grouping, but with type imports first in each group.
        groups: [
          ['^\\u0000'],
          ['^node:.*\\u0000$', '^node:'],
          ['^@?\\w.*\\u0000$', '^@?\\w'],
          ['(?<=\\u0000)$', '^'],
          ['^\\..*\\u0000$', '^\\.']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports'
      }
    ],
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/consistent-type-specifier-style': 'off',
    'no-duplicate-imports': 'error'
  }
}
