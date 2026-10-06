import { defineConfig } from 'lint-staged/config';

export default defineConfig({
  '**/*.{js,gjs,css,json,html,md,yml}': ['prettier --write', 'eslint --fix'],
});
