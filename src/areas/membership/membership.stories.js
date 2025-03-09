import welcomeMarkup from './examples/welcome.html?raw';
import membershipMarkup from './examples/membership.html?raw';
import thankYouMarkup from './examples/thank-you.html?raw';
import migrateMarkup from './examples/migrate.html?raw';
import migrateCompleteMarkup from './examples/migrate-complete.html?raw';
import cancelMarkup from './examples/cancel.html?raw';

/**
 * Special patterns and chunks of style for the membership flow.
 */
export default {
	title: 'Areas/Membership',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const Welcome = {
	render: () => welcomeMarkup,
};

export const Membership = {
	render: () => membershipMarkup,
};

export const ThankYou = {
	render: () => thankYouMarkup,
};

export const Migrate = {
	render: () => migrateMarkup,
};

export const MigrateComplete = {
	render: () => migrateCompleteMarkup,
};

export const Cancel = {
	render: () => cancelMarkup,
};
