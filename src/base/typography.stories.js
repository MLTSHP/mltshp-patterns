import headingsMarkup from './examples/headings.html?raw';
import fontFeaturesMarkup from './examples/font-features.html?raw';
import linkStylesMarkup from './examples/link-styles.html?raw';
import listsMarkup from './examples/lists.html?raw';
import tablesMarkup from './examples/tables.html?raw';
import preMarkup from './examples/preformatted.html?raw';
import blockquotesMarkup from './examples/blockquotes.html?raw';
import textSemanticsMarkup from './examples/text-semantics.html?raw';

/**
 * Below is just about everything you’ll need to style in the app.
 * Check the source code to see the many embedded elements within paragraphs.
 */
export default {
  title: 'Base/Typography',
  tags: ['autodocs'],
};

export const Headings = {
  render: () => headingsMarkup,
};

/**
 * We apply some font-features such as ligatures and kerning to headlines.
 * Here's an example that should have it applied.
 *
 * Note that these features are not available in every font.
 * In particular, our headlines use the system font stack,
 * and these rules don't seem to have any affect on the Mac system font.
 */
export const FontFeatures = {
  render: () => fontFeaturesMarkup,
};

export const TextLevelSemantics = {
  render: () => textSemanticsMarkup,
};

export const LinkStyles = {
  render: () => linkStylesMarkup,
};

export const Lists = {
  render: () => listsMarkup,
};

export const Tables = {
  render: () => tablesMarkup,
};

export const Blockquotes = {
  render: () => blockquotesMarkup,
};

/**
 * Including, but not limited to code.
 * Typographically, preformatted text is not the same thing as code.
 * Sometimes, a faithful execution of the text requires preformatted text
 * that may not have anything to do with code. For example:
 */
export const Preformatted = {
  render: () => preMarkup,
};
