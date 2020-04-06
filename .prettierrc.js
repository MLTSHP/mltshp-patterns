module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '*.html',
      options: {
        // need this to prevent prettier from adding semicolons to html files
        parser: 'html',
      },
    },
  ],
};
