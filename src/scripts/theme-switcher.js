/**
 * Use-Friendly Theme Switcher
 *
 * Allows users to switch between light, dark and system theme,
 * and saves the selected theme to localStorage.
 *
 * @see https://bnijenhuis.nl/notes/user-friendly-dark-mode/
 *
 * NOTE: could this be better?
 * @see https://chriskirknielsen.com/blog/my-under-engineered-way-to-avoid-a-flash-of-inaccurate-color-theme/
 */

const themeSwitcher = document.querySelector('.js-theme-switcher');
themeSwitcher.removeAttribute('hidden');

// get the selected theme from localStorage and fallback to system
let theme = localStorage.getItem('theme') ?? 'system';

// set button for matching theme to pressed
themeSwitcher
	.querySelector('button[data-theme="' + theme + '"]')
	.setAttribute('aria-pressed', 'true');

// add event listener to toggle the theme menu open or closed
const toggleButton = themeSwitcher.querySelector('.choose-a-shake--toggle');
toggleButton.addEventListener('click', () => {
	themeSwitcher.classList.toggle('is-expanded');
});

// get theme buttons
let themeButtons = themeSwitcher.querySelectorAll('button[data-theme]');

// handle click on button
themeButtons.forEach((themeButton) => {
	themeButton.addEventListener('click', () => {
		// get selected theme
		let selectedTheme = themeButton.getAttribute('data-theme');

		// save selected theme to localStorage
		localStorage.setItem('theme', selectedTheme);

		// add pressed state to button
		themeButton.setAttribute('aria-pressed', 'true');

		// add class to html so we can handle theme in css
		document.querySelector('html').classList.add('t-' + selectedTheme);

		// make sure other buttons and themes aren't selected
		themeButtons.forEach((otherThemeButton) => {
			// button does not match selected button
			if (themeButton != otherThemeButton) {
				// remove pressed state of button
				otherThemeButton.setAttribute('aria-pressed', 'false');

				// remove possible themes from html
				document
					.querySelector('html')
					.classList.remove('t-' + otherThemeButton.getAttribute('data-theme'));
			}
		});
	});
});
