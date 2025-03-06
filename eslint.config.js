import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	eslintConfigPrettier,
	{
		ignores: ['dist/**', '**/*.temp', '**/*.html'],
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.es2023,
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			// override/add rules settings here, such as:
			// 'vue/no-unused-vars': 'error'
		},
	},
];
