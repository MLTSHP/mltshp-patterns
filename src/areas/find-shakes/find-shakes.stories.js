import findShakesMarkup from './examples/find-shakes.html?raw';
import findPeopleMarkup from './examples/find-people.html?raw';

/**
 * Special patterns and chunks of style for the find shakes area.
 */
export default {
	title: 'Areas/Find Shakes',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const FindShakes = {
	render: () => findShakesMarkup,
};

export const FindPeople = {
	render: () => findPeopleMarkup,
};
