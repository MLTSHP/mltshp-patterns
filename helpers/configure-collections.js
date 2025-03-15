const collections = {
	sortedBrand: (collectionApi) =>
		collectionApi
			.getFilteredByTag('brand')
			.sort((a, b) => a.data.title.localeCompare(b.data.title)),
	sortedBase: (collectionApi) =>
		collectionApi
			.getFilteredByTag('base')
			.sort((a, b) => a.data.title.localeCompare(b.data.title)),
	sortedComponents: (collectionApi) =>
		collectionApi
			.getFilteredByTag('components')
			.sort((a, b) => a.data.title.localeCompare(b.data.title)),
	sortedAreas: (collectionApi) =>
		collectionApi
			.getFilteredByTag('areas')
			.sort((a, b) => a.data.title.localeCompare(b.data.title)),
};

/**
 * Add Collections
 *
 * Collections can be defined via `tag` data or Frontmatter, but we want a
 * few collections to be available to us without manually managing tags.
 *
 * @see https://www.11ty.dev/docs/collections-api/
 */
export const configureCollections = (eleventyConfig) => {
	for (const name in collections) {
		eleventyConfig.addCollection(name, collections[name]);
	}
};
