/**
 * Copy Static Files
 *
 * To improve performance, static files are not copied automatically. Instead,
 * we specify which static files and/or directories should be passed through.
 *
 * Keeping this as separate function calls so it's easy to add to and modify.
 *
 * @see https://www.11ty.io/docs/copy/
 *
 * @param {EleventyConfig} eleventyConfig
 */
export const configureStaticFiles = (eleventyConfig) => {
	// Copy the favicon to the root directory
	eleventyConfig.addPassthroughCopy({
		'src/assets/favicon.svg': 'favicon.svg',
	});

	// Copy the styleguide to the root directory
	eleventyConfig.addPassthroughCopy('src/styleguide.js');
	eleventyConfig.addPassthroughCopy('src/scripts/**/*.js');

	// Copy the entire assets directory
	eleventyConfig.addPassthroughCopy('src/assets');
};
