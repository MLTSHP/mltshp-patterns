const { src, dest, parallel } = require('gulp');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
sass.compiler = require('sass');

const outDir = 'dist';

const buildSass = () => {
  return src('./src/index.scss')
    .pipe(
      sass({
        importer: [
          require('../../glob-sass-importer'),
          // Import Theo design tokens as SCSS variables
          require('../../.theo/sass-importer'),
        ],
      }).on('error', sass.logError)
    )
    .pipe(postcss())
    .pipe(rename({ basename: 'mltshp' }))
    .pipe(dest(outDir))
    .pipe(postcss([cssnano()]))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(outDir));
};

const build = parallel(buildSass);

// Expose to Gulp
module.exports = build;
