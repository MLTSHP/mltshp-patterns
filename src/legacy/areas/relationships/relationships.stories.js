import followersMarkup from './examples/followers.html?raw';

export default {
  title: 'Legacy/Areas/Relationships',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * These patterns are shared on the Followers and Following pages.
 */
export const FollowersPage = {
  render: () => followersMarkup,
};
