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
		{
			name: 'prefixIds',
			params: {
				delim: '',
				prefix: () => crypto.randomUUID(),
			},
		},
		'convertStyleToAttrs',
		'removeDimensions',
	],
};
