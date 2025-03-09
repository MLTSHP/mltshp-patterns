import newUsersMarkup from './examples/new-users.html?raw';

/**
 * A list of users, optionally showing their most recent post.
 * Appears in the admin area. Contains the
 * [Image Medium](/docs/components-image-medium--docs) component.
 */
export default {
	title: 'Components/New Users',
	tags: ['autodocs'],
};

export const NewUsers = {
	render: () => newUsersMarkup,
};
