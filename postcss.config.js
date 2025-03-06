import postcssInlineSvg from 'postcss-inline-svg';

export default {
	plugins: [
		postcssInlineSvg({
			paths: ['./src/assets'],
		}),
	],
};
