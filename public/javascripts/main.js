let els = {};
let app = {};

app.init = () => {
	els.copy = document.querySelectorAll('.js-copy');
	els.brandSelect = document.querySelector('.js-brand-select');
	app.eventsHandlers();
	app.setBrand();
}

app.eventsHandlers = () => {
	els.copy.forEach((el) => { el.addEventListener('click', app.copyToClipboard) });
	els.brandSelect.addEventListener('change', app.updateBrand);
}

// This doesnt work tho..
app.copyToClipboard = (e) => {
	const input = document.querySelector('.js-color-copy');
	input.value = e.target.dataset.value;
	input.select();
	document.execCommand('copy');
}

app.updateBrand = (e) => {
	window.location.search = `brand=${e.target.value}`;
}

app.setBrand = () => {
	els.brandSelect.value = els.brandSelect.dataset.selection || 'as';
	document.body.dataset.brand = els.brandSelect.value;
}

app.init();
