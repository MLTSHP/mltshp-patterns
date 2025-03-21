import { EleventyRenderPlugin } from '@11ty/eleventy';
import { IdAttributePlugin } from '@11ty/eleventy';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import pluginWebc from '@11ty/eleventy-plugin-webc';
import { configureCollections } from './helpers/configure-collections.js';
import { configureFilters } from './helpers/configure-filters.js';
import { configureGlobalData } from './helpers/configure-global-data.js';
import { configureStaticFiles } from './helpers/configure-static-files.js';

export default function (eleventyConfig) {
	// Ignore README files
	eleventyConfig.ignores.add('**/README.md');

	// Copy Static Files
	configureStaticFiles(eleventyConfig);

	// Add Collections
	configureCollections(eleventyConfig);

	// Add Filters
	configureFilters(eleventyConfig);

	// Configure Global Data
	configureGlobalData(eleventyConfig);

	// Add plugins
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginWebc, {
		components: 'src/_includes/components/**/*.webc',
	});

	// Hot-reload when CSS changes and show all hosts in Terminal for mobile review.
	eleventyConfig.setServerOptions({
		watch: ['dist/**/*.css'],
		showAllHosts: true,
	});

	// Set Input and Output Directories
	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
}
