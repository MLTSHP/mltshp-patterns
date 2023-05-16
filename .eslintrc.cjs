module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // needed to help it understand jsx syntax
    'plugin:mdx/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect', // needed to keep it from complaining about mdx files
    },
  },
  rules: {},
};
