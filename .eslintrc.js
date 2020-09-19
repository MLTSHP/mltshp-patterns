module.exports = {
  extends: [
    // TODO: stop using cloud four's config
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
