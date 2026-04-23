export default {
  '**/*.{js,gjs,css}': ['prettier --write', 'eslint --fix'],
  '**/*.{html,json}': 'prettier --write',
};
