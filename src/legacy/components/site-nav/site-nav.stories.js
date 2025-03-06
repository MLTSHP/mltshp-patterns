import loggedOutMarkup from './examples/logged-out.html?raw';
import loggedInMarkup from './examples/logged-in.html?raw';
import callOutMarkup from './examples/call-out.html?raw';
import expandedMarkup from './examples/expanded.html?raw';

/**
 * Appears in the [Site Header](/docs/legacy-components-site-header--docs).
 *
 * Note that the Site Navigation contains the
 * [Choose a Shake](/docs/legacy-components-choose-a-shake--docs) component.
 */
export default {
	title: 'Legacy/Components/Site Navigation',
	tags: ['autodocs'],
};

export const LoggedIn = {
	render: () => loggedInMarkup,
};

/**
 * On small screens, the navigation is collapsed into a hamburger menu.
 * This is what it looks like expanded. (view on small screens)
 */
export const Expanded = {
	render: () => expandedMarkup,
	parameters: {
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
};

export const LoggedOut = {
	render: () => loggedOutMarkup,
};

/**
 * A "call out" is added when a logged-out user is on any page other than the
 * homepage or the sign up page.
 */
export const LoggedOutWithCallOut = {
	render: () => callOutMarkup,
};
