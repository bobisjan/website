'use strict';

module.exports = {
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
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
