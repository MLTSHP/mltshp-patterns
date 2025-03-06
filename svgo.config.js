export default {
	multipass: true,
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false,
					removeUselessStrokeAndFill: false,
				},
			},
		},
		'convertStyleToAttrs',
		'removeDimensions',
	],
};
