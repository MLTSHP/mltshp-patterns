import fs from 'node:fs';

const source = 'src/assets/icons';
const urlPrefix = 'assets/icons';
const icons = fs.readdirSync(source).map((icon) => {
	if (!icon.endsWith('.svg')) return null;
	return {
		path: `/${source}/${icon}`,
		url: `/${urlPrefix}/${icon}`,
		name: icon,
	};
});
export default icons;
