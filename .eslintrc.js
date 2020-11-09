'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: '@extensionengine',
  overrides: [{
    files: ['src/**'],
    parserOptions: {
      parser: '@babel/eslint-parser',
      sourceType: 'module'
    }
  }]
};
