'use strict';

module.exports = {
  extends: [
    'recommended',
    'stylistic',
    'ember-template-lint-plugin-prettier:recommended',
  ],
  plugins: ['ember-template-lint-plugin-prettier'],
  rules: {},
  overrides: [
    {
      files: ['**/*.{gjs,gts}'],
      rules: {
        'no-implicit-this': false,
        prettier: false,
      },
    },
  ],
};
