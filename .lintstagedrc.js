'use strict';
module.exports = {
  '**/*.{js,ts}': 'pnpm dlx eslint --fix',
  '**/*.{gjs,gts}': 'pnpm dlx ember-template-lint --fix',
  '**/*.hbs': 'pnpm dlx ember-template-lint --fix',
  '**/*.css': 'pnpm dlx stylelint --fix',
};
