const breakpoints = {
	xs: 320,
	sm: 375,
	md: 480,
	lg: 768,
	xl: 960,
	xxl: 1440,
};

const isScrolling = (el) => {
	return el.contentWindow.document.body.scrollHeight > el.clientHeight;
};

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

const resizeAllIframes = (direction, size) => {
	for (const frame of previewFrames) {
		frame.style[direction] = size ? `${size}px` : '';

		// After setting the height, grow until there's no scrollbar
		if (direction === 'height' && isScrolling(frame)) {
			grow(frame);
		}

		// After setting the width, update the height as well
		if (direction === 'width') {
			resizeAllIframes(
				'height',
				frame.contentWindow.document.body.scrollHeight,
			);
		}
	}
};

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

const onSizeChange = (size) => {
	resizeAllIframes('width', breakpoints[size]);
	activateButtons(size);
};

// Get all iframes and size buttons
const previewFrames = [...document.querySelectorAll('.js-resize-iframe')];
let sizeButtons = [
	...document.querySelectorAll('.js-iframe-size-switcher button'),
];

// Set all iframes to the height of the content when they load
for (const frame of previewFrames) {
	frame.onload = () => {
		resizeAllIframes('height', frame.contentWindow.document.body.scrollHeight);
	};
}

// Reveal all iframe size switchers
document.querySelectorAll('.js-iframe-size-switcher').forEach((switcher) => {
	switcher.removeAttribute('hidden');
});

// Get the saved size from localStorage, and apply it
let savedSize = localStorage.getItem('size');
if (savedSize) onSizeChange(savedSize);

// Set a click handler on all size buttons
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
