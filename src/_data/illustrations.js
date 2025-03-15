import fs from 'node:fs';

const source = 'src/assets/illustrations';
const urlPrefix = 'assets/illustrations';
const illustrations = fs
	.readdirSync(source)
	.filter((illustration) => {
		if (illustration.endsWith('.svg')) return true;
		return false;
	})
	.map((illustration) => {
		return {
			path: `/${source}/${illustration}`,
			url: `/${urlPrefix}/${illustration}`,
			name: illustration,
		};
	});
export default illustrations;
