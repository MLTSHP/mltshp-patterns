import twitterHowToMarkup from './examples/twitter-how-to.html?raw';

/**
 * Special patterns and chunks of style for the Twitter Tutorial page.
 *
 * This page is a JS-driven carousel.
 */
export default {
  title: 'Legacy/Areas/Twitter Tutorial',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const TwitterTutorial = {
  render: () => twitterHowToMarkup,
};
