import signInMarkup from './examples/sign-in.html?raw';
import pickerMarkup from './examples/picker.html?raw';
import pickerSuccessMarkup from './examples/picker-success.html?raw';
import pickerErrorMarkup from './examples/picker-error.html?raw';
import pickerEmailMarkup from './examples/picker-email.html?raw';
import pickerLimitMarkup from './examples/picker-limit.html?raw';

/**
 * Special patterns and chunks of style for the picker popup window.
 */
export default {
	title: 'Legacy/Areas/Picker',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const SignIn = {
	render: () => signInMarkup,
};

export const Picker = {
	render: () => pickerMarkup,
};

export const PickerSuccess = {
	render: () => pickerSuccessMarkup,
};

export const PickerError = {
	render: () => pickerErrorMarkup,
};

export const PickerEmailValidation = {
	render: () => pickerEmailMarkup,
};

export const PickerUploadLimit = {
	render: () => pickerLimitMarkup,
};
