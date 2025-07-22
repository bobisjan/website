export default {
  '**/*.{js,css}': ['prettier --write', 'eslint --fix'],
  '**/*.gjs': ['prettier --write', 'eslint --fix', 'ember-template-lint --fix'],
  '**/*.{html,json}': 'prettier --write',
};
