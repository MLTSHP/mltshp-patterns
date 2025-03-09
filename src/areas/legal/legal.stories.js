import codeOfConductMarkup from './examples/code-of-conduct.html?raw';
import announcementTOUMarkup from './examples/announcement-tou.html?raw';
import termsOfUseMarkup from './examples/terms-of-use.html?raw';

/**
 * Special patterns and chunks of style for the legal pages.
 */
export default {
	title: 'Areas/Legal',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export const LegalAnnouncement = {
	render: () => announcementTOUMarkup,
};

export const CodeOfConduct = {
	render: () => codeOfConductMarkup,
};

export const TermsOfUse = {
	render: () => termsOfUseMarkup,
};
