import userFollowMarkup from './examples/user-follow.html?raw';
import userFollowExtendedMarkup from './examples/user-follow-extended.html?raw';

export default {
	title: 'Legacy/Components/User Follow',
	tags: ['autodocs'],
};

/**
 * Appears on the "Find More Shakes" page.
 */
export const Compact = {
	render: () => userFollowMarkup,
};

/**
 * Appears in the sidebar on User Shakes.
 */
export const Extended = {
	render: () => userFollowExtendedMarkup,
};
