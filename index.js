/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'import', 'babel'],
  settings: {
    'import/parser': 'babel-eslint',
  },
  parser: 'babel-eslint',
  rules: {
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: false,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true,
      },
    }],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'arrow-body-style': 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],
    'react/jsx-one-expression-per-line': 0,
    'object-curly-newline': 0,
  },
};
