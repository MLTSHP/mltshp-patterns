/**
 * Configure Global Data
 *
 * Sometimes we need to set global data that is available in all contexts.
 *
 * @see https://www.11ty.dev/docs/data-global-custom/
 *
 * @param {EleventyConfig} eleventyConfig
 */
export const configureGlobalData = (eleventyConfig) => {
	/**
	 * Only render HTML files if they have the `iframe` front matter set to `true`.
	 * Also, output them to their exact file name, not transformed to `index.html`.
	 */
	eleventyConfig.addGlobalData('permalink', () => {
		return (data) => {
			if (data.page.inputPath.endsWith('.html')) {
				if (data.iframe) {
					return `${data.page.filePathStem}.${data.page.outputFileExtension}`;
				}
				return false;
			}
		};
	});
};
