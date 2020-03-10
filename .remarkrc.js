// copied from https://github.com/storybookjs/linter-config
module.exports = {
  plugins: [
    'remark-preset-lint-recommended',
    'remark-preset-prettier',
    ['remark-lint-list-item-indent', false],
  ],
};
