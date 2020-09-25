const { series } = require('gulp');
const buildTokens = require('./build-tokens');
const buildSass = require('./build-sass');

module.exports = series(buildTokens, buildSass);
