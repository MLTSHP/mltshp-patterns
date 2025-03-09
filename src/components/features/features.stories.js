import defaultMarkup from './examples/feature-default.html?raw';
import flippedMarkup from './examples/feature-flipped.html?raw';
import primaryMarkup from './examples/feature-primary.html?raw';
import finaleMarkup from './examples/feature-finale.html?raw';
import listMarkup from './examples/feature-list.html?raw';

/**
 * Used on the logged-out version of the homepage to promote site features.
 */
export default {
	title: 'Components/Features',
	tags: ['autodocs'],
};

export const Default = {
	render: () => defaultMarkup,
};

export const Flipped = {
	render: () => flippedMarkup,
};

export const Primary = {
	render: () => primaryMarkup,
};

export const Finale = {
	render: () => finaleMarkup,
};

export const FeatureList = {
	render: () => listMarkup,
};
