'use strict';

module.exports = {
  plugins: ['prettier-plugin-ember-template-tag'],

  overrides: [
    {
      files: '*.{js,ts,mjs,mts}',
      options: {
        singleQuote: true,
      },
    },
    {
      files: '*.{gjs,gts}',
      options: {
        parser: 'ember-template-tag',
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
    {
      files: '**/*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
