import { IdAttributePlugin } from '@11ty/eleventy';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import pluginWebc from '@11ty/eleventy-plugin-webc';
import { configureFilters } from './helpers/configure-filters.js';
import { configureStaticFiles } from './helpers/configure-static-files.js';

export default function (eleventyConfig) {
	// Ignore README files
	eleventyConfig.ignores.add('**/README.md');

	// Ignore HTML files (these are example code we manually include)
	eleventyConfig.ignores.add('**/*.html');

	// Copy Static Files
	configureStaticFiles(eleventyConfig);

	// Add Filters
	configureFilters(eleventyConfig);

	// Add plugins
	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginWebc);

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
