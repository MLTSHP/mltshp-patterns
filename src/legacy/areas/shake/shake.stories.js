import shakeMarkup from './examples/shake.html?raw';

/**
 * Composition example of a Shake page
 */
export default {
	title: 'Legacy/Areas/Shake',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const Shake = {
	render: () => shakeMarkup,
};
