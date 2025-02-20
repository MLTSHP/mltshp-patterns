import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import * as mdx from 'eslint-plugin-mdx';
import storybook from 'eslint-plugin-storybook';

export default [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended, // needed to help it understand jsx syntax
  ...storybook.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    ...mdx.flat,
  },
  {
    ignores: [
      '!.storybook',
      'dist/**',
      'storybook-static/**',
      'src/compiled/**',
      '**/*.temp',
      '**/*.html',
    ],
  },
  {
    settings: {
      react: {
        version: 'detect', // needed to keep it from complaining about mdx files
      },
    },
  },
  {
    files: ['**/*.js', '**/*.mdx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2023,
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
  },
];
