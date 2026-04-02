import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: [js, 'jest'],
    extends: ['js/recommended'],
    env: {
      jest: true,
    },
    languageOptions: { globals: globals.node },
  },
]);
