const theo = require('theo');
const mdxStoriesFormat = require('./formats/stories.mdx');

// Register formats
theo.registerFormat('stories.mdx', mdxStoriesFormat);

// Export this Theo to be consumed by other build tools
module.exports = theo;
