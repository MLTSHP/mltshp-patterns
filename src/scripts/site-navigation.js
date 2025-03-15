const siteNav = document.querySelector('.js-site-nav');

// add event listener to toggle the theme menu open or closed
const toggleButton = siteNav.querySelector('.site-nav--toggle');
toggleButton.addEventListener('click', () => {
	siteNav.classList.toggle('is-expanded');
});
