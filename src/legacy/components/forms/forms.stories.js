import funFormMarkup from './examples/fun-form.html?raw';
import funFormStackedMarkup from './examples/fun-form-stacked.html?raw';
import funFormErrorsMarkup from './examples/fun-form-errors.html?raw';
import formFieldsMarkup from './examples/form-fields.html?raw';

export default {
  title: 'Legacy/Components/Forms',
  tags: ['autodocs'],
};

export const FunForm = {
  render: () => funFormMarkup,
  parameters: {
    layout: 'fullscreen',
  },
};

export const FunFormStacked = {
  render: () => funFormStackedMarkup,
  parameters: {
    layout: 'fullscreen',
  },
};

export const FunFormErrors = {
  render: () => funFormErrorsMarkup,
};

export const FormFields = {
  render: () => formFieldsMarkup,
};
