// on arrow down click, scroll to first section
document.addEventListener('click', function (event) {
	if (!event.target.matches('#arrow-down')) return;
	document.querySelector('section').scrollIntoView({behavior: 'smooth'});
}, false);