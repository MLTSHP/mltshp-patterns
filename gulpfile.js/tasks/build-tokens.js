const shell = require('gulp-shell');

/**
 * Tokens
 *
 * Runs the Build Tokens script.
 *
 * See `build-tokens.js` in the project root for token configuration.
 *
 * @see https://amzn.github.io/style-dictionary/
 */
module.exports = function buildTokens(cb) {
  shell.task('node ./build-tokens.js');
  cb();
};
