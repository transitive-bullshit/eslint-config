/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: ['**/*.{ts,tsx,mts,cts}'],

  plugins: ['@typescript-eslint'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic'
  ],

  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        filter: { regex: '^(__String|[A-Za-z]+_[A-Za-z]+)$', match: false }
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: { regex: '^I[A-Z]', match: false },
        filter: {
          regex: '^I(Arguments|TextWriter|O([A-Z][a-z]+[A-Za-z]*)?)$',
          match: false
        }
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^(_{1,2}filename|_{1,2}dirname|_+|[A-Za-z]+_[A-Za-z]+)$',
          match: false
        }
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: { regex: '^[A-Za-z]+_[A-Za-z]+$', match: false }
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        filter: { regex: '^(_+|[A-Za-z]+_[A-Z][a-z]+)$', match: false }
      },
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: { regex: '^([0-9]+|[A-Za-z]+_[A-Za-z]+)$', match: false }
      },
      {
        selector: 'memberLike',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        filter: { regex: '^([0-9]+|[A-Za-z]+_[A-Za-z]+)$', match: false }
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: { regex: '^[A-Za-z]+_[A-Za-z]+$', match: false }
      },
      { selector: 'property', format: null }
    ],

    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowTernary: true }
    ],

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        // Require a description for @ts-expect-error to be 10 characters or more.
        minimumDescriptionLength: 10
      }
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',

    // Rules enabled in typescript-eslint configs that are not applicable here
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          // This is theoretically good, but ts-eslint appears to mistake our declaration of Symbol for the global Symbol type.
          // See: https://github.com/typescript-eslint/typescript-eslint/issues/7306
          Symbol: false,
          '{}': false // {} is a totally useful and valid type.
        }
      }
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // Ignore: (solely underscores | starting with exactly one underscore)
        argsIgnorePattern: '^(_+$|_[^_])',
        varsIgnorePattern: '^(_+$|_[^_])'
      }
    ],

    // Pending https://github.com/typescript-eslint/typescript-eslint/issues/4820
    '@typescript-eslint/prefer-optional-chain': 'off',

    '@typescript-eslint/array-type': 'off',

    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreProperties: true
      }
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: false,
        enums: false,
        typedefs: false,
        ignoreTypeReferences: true
      }
    ]
  },

  overrides: [
    {
      files: ['*.mjs', '*.mts'],
      rules: {
        // These globals don't exist outside of CJS files.
        'no-restricted-globals': [
          'error',
          { name: '__filename' },
          { name: '__dirname' },
          { name: 'require' },
          { name: 'module' },
          { name: 'exports' }
        ]
      }
    }
  ]
}
