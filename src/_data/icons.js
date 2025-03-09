import fs from 'node:fs';

const source = 'src/assets/icons';
const icons = fs.readdirSync(source).map((icon) => {
	if (!icon.endsWith('.svg')) return null;
	return {
		path: `/${source}/${icon}`,
		name: icon,
	};
});
export default icons;
