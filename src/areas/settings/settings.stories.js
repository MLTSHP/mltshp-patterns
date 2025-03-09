import settingsMarkup from './examples/settings.html?raw';
import settingsProfileMarkup from './examples/settings-profile.html?raw';
import settingsConnectionsMarkup from './examples/settings-connections.html?raw';

/**
 * Special patterns and chunks of style for the settings area.
 */
export default {
	title: 'Areas/Settings',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const Account = {
	render: () => settingsMarkup,
};

export const Profile = {
	render: () => settingsProfileMarkup,
};

export const Connections = {
	render: () => settingsConnectionsMarkup,
};
