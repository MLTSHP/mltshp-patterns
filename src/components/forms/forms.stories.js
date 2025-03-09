import funFormMarkup from './examples/fun-form.html?raw';
import funFormStackedMarkup from './examples/fun-form-stacked.html?raw';
import funFormErrorsMarkup from './examples/fun-form-errors.html?raw';
import formFieldsMarkup from './examples/form-fields.html?raw';

export default {
	title: 'Components/Forms',
	tags: ['autodocs'],
};

/**
 * This is our default form style.
 * Note that it expects to be used in a constrained width container.
 */
export const FunForm = {
	render: () => funFormMarkup,
	parameters: {
		layout: 'fullscreen',
	},
};

/**
 * A vertically-stacked modifier for Fun Form.
 * Useful for width-constrained areas like the sidebar.
 */
export const FunFormStacked = {
	render: () => funFormStackedMarkup,
	parameters: {
		layout: 'fullscreen',
	},
};

/**
 * List of errors that usually lives above the form.
 */
export const FunFormErrors = {
	render: () => funFormErrorsMarkup,
};

/**
 * Unstyled native form elements for reference.
 */
export const FormFields = {
	render: () => formFieldsMarkup,
};
