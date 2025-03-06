export default function (eleventyConfig) {
	// Ignore README files
	eleventyConfig.ignores.add('**/README.md');

	// TODO: Temporarily ignore HTML files
	eleventyConfig.ignores.add('**/*.html');

	// Copy over asset files
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy({
		'src/assets/favicon.svg': 'favicon.svg',
	});

	// Watch built files and show all hosts in Terminal for mobile viewing
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
