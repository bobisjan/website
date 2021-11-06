'use strict';

module.exports = {
  extends: [
    'recommended',
    'stylistic',
    'ember-template-lint-plugin-prettier:recommended',
  ],
  plugins: ['ember-template-lint-plugin-prettier'],
  rules: {
    'no-curly-component-invocation': { allow: ['current-year'] },
    'no-implicit-this': { allow: ['current-year'] },
  },
};
