import defaultMarkup from './examples/default.html?raw';
import linearMarkup from './examples/linear.html?raw';

export default {
	title: 'Components/Pagination',
	tags: ['autodocs'],
};

/**
 * Used on Conversations, Followers, and User Shakes.
 */
export const Default = {
	render: () => defaultMarkup,
};

/**
 * Used on all other shakes and search results.
 */
export const Linear = {
	render: () => linearMarkup,
};
