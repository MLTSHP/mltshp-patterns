const { watch } = require('gulp');
const theoToMdx = require('./theo-to-mdx');

module.exports = function () {
  watch('src/design-tokens/**/*.yml', theoToMdx);
};
