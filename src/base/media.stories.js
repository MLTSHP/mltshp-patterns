import imagesMarkup from './examples/images.html?raw';
import figuresMarkup from './examples/figures.html?raw';
import embedsMarkup from './examples/embeds.html?raw';

export default {
	title: 'Base/Media',
	tags: ['autodocs'],
};

/**
 * Images are made responsive so that it scales with the parent element.
 */
export const Images = {
	render: () => imagesMarkup,
};

export const Figures = {
	render: () => figuresMarkup,
};

/**
 * Sometimes all you want to do is embed a little love from another location and set your post alive.
 */
export const Embeds = {
	render: () => embedsMarkup,
};
