let theme = localStorage.getItem('theme')
	? localStorage.getItem('theme')
	: 'system';
document.querySelector('html').classList.add('t-' + theme);
