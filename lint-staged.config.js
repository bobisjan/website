export default {
  '**/*.{js,gjs,css,json,md}': ['prettier --write', 'eslint --fix'],
  '**/*.{html}': 'prettier --write',
};
