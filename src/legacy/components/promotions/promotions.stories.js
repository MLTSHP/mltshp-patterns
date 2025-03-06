import defaultMarkup from './examples/promotions.html?raw';
import promoMarkup from './examples/promo.html?raw';

export default {
	title: 'Legacy/Components/Promotions',
	tags: ['autodocs'],
};

/**
 * Made for the Create Account Page.
 */
export const Promotions = {
	render: () => defaultMarkup,
	name: 'Mini Promos',
	parameters: {
		docs: {
			story: {
				height: '175px',
			},
		},
	},
};

/**
 * Appears in the sidebar, hidden on small screens.
 */
export const Promo = {
	render: () => promoMarkup,
	name: 'Sidebar Promo',
};
