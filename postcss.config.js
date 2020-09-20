module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-inline-svg')({
      paths: ['./src/assets'],
    }),
  ],
};
