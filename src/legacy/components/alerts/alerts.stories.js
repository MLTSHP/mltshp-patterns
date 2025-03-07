import alertMarkup from './examples/alert.html?raw';
import dangerMarkup from './examples/danger.html?raw';
import warningMarkup from './examples/warning.html?raw';
import marqueeMarkup from './examples/marquee.html?raw';
import reminderMarkup from './examples/reminder.html?raw';

export default {
	title: 'Legacy/Components/Alerts',
	tags: ['autodocs'],
};

export const Alert = {
	render: () => alertMarkup,
};

export const Marquee = {
	render: () => marqueeMarkup,
};

export const Danger = {
	render: () => dangerMarkup,
};

export const Warning = {
	render: () => warningMarkup,
};

export const Reminder = {
	render: () => reminderMarkup,
};
