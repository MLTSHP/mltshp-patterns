import { readFileSync } from 'fs';

/**
 * Get the contents of a file
 *
 * Usage: `{{ '/img/example.svg' | printFileContents }}`
 *
 * @see https://bnijenhuis.nl/notes/load-file-contents-in-eleventy/
 *
 * @param string filePath Path to the file to read
 * @returns string File contents
 */
export default function getFileContents(filePath) {
	const YAMLFrontMatter = /---\s*[\s\S]*?\s*---\s*/;

	const relativeFilePath = `.` + filePath;
	const fileContents = readFileSync(relativeFilePath, (err, data) => {
		if (err) throw err;
		return data;
	});

	// Return the markup without the YAML front matter
	return fileContents.toString('utf8').replace(YAMLFrontMatter, '');
}
