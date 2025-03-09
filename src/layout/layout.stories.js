import pageMarkup from './examples/page.html?raw';
import narrowMarkup from './examples/narrow.html?raw';
import sidebarMarkup from './examples/sidebar.html?raw';
import sidebarReversedMarkup from './examples/sidebar-reversed.html?raw';

/**
 * Special patterns and chunks of style for the admin area.
 */
export default {
	title: 'Layouts',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const PageLayout = {
	render: () => pageMarkup,
};

export const Narrow = {
	render: () => narrowMarkup,
};

export const Sidebar = {
	render: () => sidebarMarkup,
};

export const SidebarReversed = {
	render: () => sidebarReversedMarkup,
};
