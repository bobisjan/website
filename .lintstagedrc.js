'use strict';
module.exports = {
  '**/*.{js,ts}': ['npx prettier --write', 'npx eslint --fix'],
  '**/*.{gjs,gts}': ['npx prettier --write', 'npx ember-template-lint --fix'],
  '**/*.css': ['npx prettier --write', 'npx stylelint --fix'],
  '**/*.{html,json}': 'npx prettier --write',
};
