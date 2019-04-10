/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    jsx: true,
    useJSXTextNode: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'indent': 'off',
    'no-console': 'warn',

    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-interface': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'ignoreRestSiblings': true }],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', { 'allowExpressions': true, 'allowTypedFunctionExpressions': true }],
  }
}

