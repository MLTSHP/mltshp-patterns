import defaultMarkup from './examples/dashboard-new-user.html?raw';

/**
 * Appears on the homepage if the user has no shared files to view.
 */
export default {
	title: 'Components/New User Dashboard',
	tags: ['autodocs'],
};

export const NewUserDashboard = {
	render: () => defaultMarkup,
};
