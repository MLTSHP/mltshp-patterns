import signInMarkup from './examples/sign-in.html?raw';
import forgotPasswordMarkup from './examples/forgot-password.html?raw';

/**
 * Special patterns and chunks of style for the Sign In page.
 */
export default {
	title: 'Legacy/Areas/Sign In',
	tags: ['autodocs'],
};

export const SignIn = {
	render: () => signInMarkup,
};

export const ForgotPassword = {
	render: () => forgotPasswordMarkup,
};
