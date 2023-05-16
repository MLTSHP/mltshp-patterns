import accountHeaderMarkup from './examples/account-header.html?raw';

export default {
  title: 'Legacy/Components/Page Header',
  tags: ['autodocs'],
};

/**
 * Appears at the top of most pages.
 */
export const PageHeader = {
  render: () => accountHeaderMarkup,
};
