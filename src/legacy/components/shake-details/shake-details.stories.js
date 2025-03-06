import defaultMarkup from './examples/default.html?raw';
import editableMarkup from './examples/editable.html?raw';
import editingMarkup from './examples/editing.html?raw';
import emptyMarkup from './examples/empty.html?raw';

export default {
	title: 'Legacy/Components/Shake Details',
	tags: ['autodocs'],
};

export const Default = {
	render: () => defaultMarkup,
};

export const Editable = {
	render: () => editableMarkup,
};

export const Editing = {
	render: () => editingMarkup,
};

export const Empty = {
	render: () => emptyMarkup,
};
