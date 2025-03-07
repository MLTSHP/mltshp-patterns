import apiReferenceMarkup from './examples/api-reference.html?raw';
import apiAccessMarkup from './examples/api-access.html?raw';

/**
 * Special patterns and chunks of style for the Developer pages.
 */
export default {
	title: 'Legacy/Areas/Developer',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const ApiReference = {
	render: () => apiReferenceMarkup,
	name: 'API Reference',
};

export const ApiAccess = {
	render: () => apiAccessMarkup,
	name: 'API Access',
};
