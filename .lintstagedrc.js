'use strict';
module.exports = {
  '**/*.{js,ts}': 'npx eslint --fix',
  '**/*.{gjs,gts}': 'npx ember-template-lint --fix',
  '**/*.hbs': 'npx ember-template-lint --fix',
  '**/*.css': 'npx stylelint --fix',
};
