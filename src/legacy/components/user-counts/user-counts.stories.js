import userCountsMarkup from './examples/user-counts.html?raw';
import userCountsNarrowMarkup from './examples/user-counts-narrow.html?raw';

export default {
	title: 'Legacy/Components/User Counts',
	tags: ['autodocs'],
};

/**
 * Appears in the sidebar on User Shakes.
 */
export const UserCounts = {
	render: () => userCountsMarkup,
};

/**
 * Though fully responsive, this component is typically displayed in the sidebar
 * with a constrained width. Care should be taken, since very large numbers can
 * appear in this component.
 */
export const Narrow = {
	render: () => userCountsNarrowMarkup,
};
