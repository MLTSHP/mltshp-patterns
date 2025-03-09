import incomingMarkup from './examples/incoming.html?raw';

/**
 * Special patterns and chunks of style for the incoming area.
 */
export default {
	title: 'Areas/Incoming',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const Incoming = {
	render: () => incomingMarkup,
};
