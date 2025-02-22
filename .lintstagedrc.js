'use strict';
module.exports = {
  '**/*.{js,ts,mjs,mts}': ['prettier --write', 'eslint --fix'],
  '**/*.{gjs,gts}': ['prettier --write', 'ember-template-lint --fix'],
  '**/*.css': ['prettier --write', 'stylelint --fix'],
  '**/*.{html,json}': 'prettier --write',
};
