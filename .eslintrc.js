module.exports = {
  extends: [
    'plugin:@cloudfour/recommended',
    'plugin:mdx/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react'],
  settings: {
    node: {
      allowModules: ['@storybook/addon-docs', '@storybook/addon-knobs'],
    },
  },
  rules: {
    'padding-line-between-statements': 'off',
    'react/jsx-uses-vars': 'error',
  },
};
