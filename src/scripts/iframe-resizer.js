const previewFrames = [...document.querySelectorAll('.js-resize-iframe')];

for (const frame of previewFrames) {
	frame.onload = () => {
		frame.style.height =
			frame.contentWindow.document.body.scrollHeight + 16 + 'px';
	};
}
