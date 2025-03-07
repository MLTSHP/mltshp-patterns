import getFileContents from './filters/get-file-contents.js';

const filters = {
	getFileContents,
};

/**
 * Add Filters
 *
 * Filters are used to transform data in templates.
 *
 * @see https://www.11ty.io/docs/filters/
 *
 * @param {EleventyConfig} eleventyConfig
 */
export const configureFilters = (eleventyConfig) => {
	for (const name in filters) {
		eleventyConfig.addFilter(name, filters[name]);
	}
};
