import postcssInlineSvg from 'postcss-inline-svg';

module.exports = {
	plugins: [
		postcssInlineSvg({
			paths: ['./src/assets'],
		}),
	],
};
