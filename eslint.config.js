import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import css from '@eslint/css';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

import ember from 'eslint-plugin-ember/recommended';
import template from 'eslint-plugin-ember/configs/template-lint-migration';

import prettier from 'eslint-config-prettier/flat';
import qunit from 'eslint-plugin-qunit';
import n from 'eslint-plugin-n';

import babelParser from '@babel/eslint-parser/experimental-worker';

export default defineConfig([
  globalIgnores(['.husky/', 'dist/', 'coverage/', 'pnpm-lock.yaml']),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  ember.configs.base,
  ember.configs.gjs,
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: { ecmaFeatures: { modules: true } },
    },
  },
  {
    files: ['src/**/*.{js,gjs}', 'tests/**/*.{js,gjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: js.configs.recommended.rules,
  },
  {
    files: ['**/*.gjs'],
    rules: {
      ...template.at(-1).rules,
    },
  },
  {
    files: ['tests/**/*-test.{js,gjs}'],
    plugins: { qunit },
    rules: {
      ...qunit.configs.recommended.rules,
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
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  {
    files: ['**/*.json'],
    ignores: ['pnpm-lock.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    extends: ['markdown/recommended'],
  },
  prettier,
]);
