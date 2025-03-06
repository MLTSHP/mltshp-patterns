import darkThemeMarkup from './examples/dark.html?raw';

/**
 * Themes may be applied to a containing element to dramatically change that
 * content's appearance. Theme classes are always prefixed by `t-`.
 *
 * While selector depth is best kept to a minimum, it's permissible to style
 * objects and components differently within a theme class. If you find you are
 * working *against* a theme class a lot, it may be a sign that you really need
 * a whole new pattern and modifier (instead of just a themed variation).
 */
export default {
	title: 'Brand/Themes',
	tags: ['autodocs'],
};

/**
 * You can test dark mode by enabling dark mode on your computer, or with the theme option.
 */
export const Dark = {
	render: () => darkThemeMarkup,
};
