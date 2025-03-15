const breakpoints = {
	xs: 320,
	sm: 375,
	md: 480,
	lg: 768,
	xl: 960,
	xxl: 1440,
};

// Get all the iframes and size buttons for easy reference.
let iframesLoaded = 0;
const previewFrames = [...document.querySelectorAll('.js-resize-iframe')];
let sizeButtons = [
	...document.querySelectorAll('.js-iframe-size-switcher button'),
];

// Reveal all iframe size switchers
document.querySelectorAll('.js-iframe-size-switcher').forEach((switcher) => {
	switcher.removeAttribute('hidden');
});

/**
 * Check if an element has a vertical scrollbar.
 *
 * @param {HTMLElement} el - The element to check
 * @returns boolean
 */
const isScrolling = (el) => {
	return el.contentWindow.document.body.scrollHeight > el.clientHeight;
};

/**
 * Grow an element's height until it stops scrolling.
 *
 * @param {HTMLElement} el - The element to grow
 */
const grow = (el) => {
	// Store initial height
	let previousHeight = el.clientHeight;

	while (isScrolling(el)) {
		// Increase the height
		el.style.height = `${previousHeight + 10}px`;

		// Get the updated height
		const newHeight = el.clientHeight;

		// If the height hasn't changed, break the loop
		// This is an important safety check in case the height is hard coded
		if (newHeight === previousHeight) break;

		// Store the updated height for the next comparison and proceed
		previousHeight = newHeight;
	}
};

/**
 * Resize a given iframe in a specific direction.
 *
 * @param {HTMLIFrameElement} frame - The iframe to resize
 * @param {string} direction - The direction to resize (width or height)
 * @param {number} size - The size to set (in pixels)
 */
const resizeIframe = (frame, direction, size) => {
	if (frame.height && direction === 'height') return;

	frame.style[direction] = size ? `${size}px` : '';

	// After setting the height, grow until there's no scrollbar
	if (direction === 'height' && isScrolling(frame)) {
		grow(frame);
	}

	// After setting the width, update the height as well
	if (direction === 'width') {
		resizeIframe(
			frame,
			'height',
			frame.contentWindow.document.body.scrollHeight,
		);
	}
};

/**
 * Resize all iframes in a specific direction.
 *
 * @param {string} direction - The direction to resize (width or height)
 * @param {number} size - The size to set (in pixels)
 */
const resizeAllIframes = (direction, size) => {
	for (const frame of previewFrames) {
		resizeIframe(frame, direction, size);
	}
};

/**
 * Set all buttons of the given size to their "pressed" state.
 *
 * @param {string} size - The size to activate
 */
const activateButtons = (size) => {
	for (const button of sizeButtons) {
		// Check if the button's size matches the selected size
		const isSelected = button.getAttribute('data-size') === size;

		// Abort early if it's the Reset button (no size)
		if (isSelected && !size) continue;

		// Set the button's aria-pressed attribute
		button.setAttribute('aria-pressed', isSelected);
	}
};

/**
 * When the size changes, resize all iframes and update the buttons.
 *
 * @param {string} size - The new size to apply
 */
const onSizeChange = (size) => {
	resizeAllIframes('width', breakpoints[size]);
	activateButtons(size);
};

/**
 * Add a load event listener to each iframe.
 * When an iframe is loaded, resize it to its content height.
 * Once all iframes are loaded, check localStorage for a saved size.
 */
for (const frame of previewFrames) {
	frame.onload = () => {
		iframesLoaded++;
		resizeIframe(
			frame,
			'height',
			frame.contentWindow.document.body.scrollHeight,
		);

		// Get the saved size from localStorage, and apply it
		if (iframesLoaded === previewFrames.length) {
			let savedSize = localStorage.getItem('size');
			if (savedSize) onSizeChange(savedSize);
		}
	};
}

/**
 * Add a click handler on all size buttons.
 * When a button is clicked, save the selected size to localStorage,
 * update all iframes and buttons, and scroll the button into view if needed.
 */
sizeButtons.forEach((sizeButton) => {
	sizeButton.addEventListener('click', () => {
		// get the selected button's size
		let selectedSize = sizeButton.getAttribute('data-size');

		// save selected size to localStorage
		localStorage.setItem('size', selectedSize);

		// Update all iframes and buttons
		onSizeChange(selectedSize);

		// Scroll the selected button into view if it's offscreen
		const bounding = sizeButton.getBoundingClientRect();
		const bottomOffscreen = bounding.bottom > window.innerHeight;
		const topOffscreen = bounding.top < 0;
		if (bottomOffscreen || topOffscreen) {
			sizeButton.scrollIntoView(false);
		}
	});
});
