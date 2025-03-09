import fs from 'node:fs';

const source = 'src/assets/illustrations';
const illustrations = fs
	.readdirSync(source)
	.filter((illustration) => {
		if (illustration.endsWith('.svg')) return true;
		return false;
	})
	.map((illustration) => {
		return {
			path: `/${source}/${illustration}`,
			name: illustration,
		};
	});
export default illustrations;
