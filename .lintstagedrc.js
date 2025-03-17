'use strict';
module.exports = {
  '**/*.{js,ts,mjs,mts,css}': ['prettier --write', 'eslint --fix'],
  '**/*.{gjs,gts}': ['prettier --write', 'ember-template-lint --fix'],
  '**/*.{html,json}': 'prettier --write',
};
