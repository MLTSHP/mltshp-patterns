const { watch } = require('gulp');
const tokens = require('./build-tokens');

module.exports = () => {
  watch('src/tokens/**/*.+(js|json)', tokens);
};
