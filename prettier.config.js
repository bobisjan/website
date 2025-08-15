export default {
  plugins: ['prettier-plugin-ember-template-tag'],

  overrides: [
    {
      files: '*.{js,gjs}',
      options: {
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
  ],
};
