import faqMarkup from './examples/faq.html?raw';

/**
 * Special patterns and chunks of style for the FAQ page.
 */
export default {
  title: 'Legacy/Areas/FAQ',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Faq = {
  render: () => faqMarkup,
  name: 'FAQ',
};
