module.exports = {
  extends: ['stylelint-config-spaceninja', 'stylelint-config-prettier'],
  rules: {
    // disabling due to many false positives
    'no-descending-specificity': null,
    // disabling to avoid tripping over existing comment blocks
    'scss/comment-no-empty': null,
  },
};
