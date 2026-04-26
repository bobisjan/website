import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import css from '@eslint/css';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import html from '@html-eslint/eslint-plugin';

import ember from 'eslint-plugin-ember/recommended';
import template from 'eslint-plugin-ember/configs/template-lint-migration';

import prettier from 'eslint-config-prettier/flat';
import qunit from 'eslint-plugin-qunit';
import n from 'eslint-plugin-n';
import yml from 'eslint-plugin-yml';

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
    files: ['**/*.{js,gjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
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
    files: ['*.js', 'fastboot/**/*.js'],
    plugins: { n },
    extends: ['n/recommended'],
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
  {
    files: ['**/*.html'],
    plugins: { html },
    language: 'html/html',
    extends: ['html/recommended'],
    rules: {
      'html/attrs-newline': 'off',
      'html/indent': 'off',
      'html/no-extra-spacing-attrs': 'off',
      'html/require-closing-tags': 'off',
    },
  },
  {
    files: ['**/*.yml'],
    plugins: { yml },
    language: 'yml/yaml',
    extends: ['yml/recommended'],
  },
  prettier,
]);
