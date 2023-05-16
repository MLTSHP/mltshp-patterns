import contentSearchMarkup from './examples/content-search.html?raw';
import searchResultsMarkup from './examples/search-results.html?raw';
import noResultsMarkup from './examples/no-results.html?raw';
import sidebarSearchMarkup from './examples/sidebar-search.html?raw';

/**
 * Special patterns and chunks of style for the Search page.
 */
export default {
  title: 'Legacy/Areas/Search',
  tags: ['autodocs'],
};

export const SearchPage = {
  render: () => contentSearchMarkup,
  parameters: {
    layout: 'fullscreen',
  },
};

export const SearchResults = {
  render: () => searchResultsMarkup,
  parameters: {
    layout: 'fullscreen',
  },
};

export const NoResults = {
  render: () => noResultsMarkup,
  parameters: {
    layout: 'fullscreen',
  },
};

export const SidebarSearch = {
  render: () => sidebarSearchMarkup,
};
