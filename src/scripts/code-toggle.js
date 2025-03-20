const toggleButtons = document.querySelectorAll('.js-code-toggle');

// Reveal the toggle buttons and hide the code blocks
toggleButtons.forEach((toggle) => {
	toggle.removeAttribute('hidden');
	toggle.querySelector('button').setAttribute('aria-expanded', 'false');
	toggle.nextElementSibling.setAttribute('hidden', '');
	toggle.addEventListener('click', () => {
		const button = toggle.querySelector('button');
		const isExpanded = button.getAttribute('aria-expanded') === 'true';
		button.setAttribute('aria-expanded', !isExpanded);
		toggle.nextElementSibling.toggleAttribute('hidden');
	});
});
