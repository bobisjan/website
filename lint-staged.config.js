export default {
  '**/*.{js,gjs,css,md}': ['prettier --write', 'eslint --fix'],
  '**/*.{html,json}': 'prettier --write',
};
