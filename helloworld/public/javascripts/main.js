let els = {};
let app = {};

app.init = () => {
	els.copy = document.querySelectorAll('.js-copy');
	app.eventsHandlers();
}

app.eventsHandlers = () => {
	els.copy.forEach((el) => { el.addEventListener('click', app.copyToClipboard) });
}

// This doesnt work tho..
app.copyToClipboard = (e) => {
	const input = document.querySelector('.js-color-copy');
	input.value = e.target.dataset.value;
	input.select();
	document.execCommand('copy');
}

app.init();
