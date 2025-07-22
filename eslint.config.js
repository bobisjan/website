import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import css from '@eslint/css';

import ember from 'eslint-plugin-ember/recommended';

import prettier from 'eslint-config-prettier/flat';
import qunit from 'eslint-plugin-qunit';
import n from 'eslint-plugin-n';

import babelParser from '@babel/eslint-parser/experimental-worker';

export default defineConfig(
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    rules: js.configs.recommended.rules,
  },
  ember.configs.base,
  ember.configs.gjs,
  prettier,
  globalIgnores(['dist/', 'node_modules/', 'coverage/', '!**/.*']),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      parser: babelParser,
    },
  },
  {
    files: ['src/**/*.{js,gjs}', 'tests/**/*.{js,gjs}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['tests/**/*-test.{js,gjs}'],
    plugins: {
      qunit,
    },
  },
  {
    files: ['*.js'],
    plugins: {
      n,
    },

    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.css'],
    language: 'css/css',
    ...css.configs.recommended,
  },
);
