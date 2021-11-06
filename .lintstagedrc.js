'use strict';
module.exports = {
  '**/*.js': 'npx eslint --fix',
  '**/*.hbs': 'npx ember-template-lint --fix',
  '**/*.css': 'npx stylelint --fix',
};
