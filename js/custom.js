// on arrow down click, scroll to first section
document.addEventListener('click', function (event) {
	if (!event.target.matches('#arrow-down')) return;
	document.querySelector('section').scrollIntoView({behavior: 'smooth'});
}, false);

// animate patterend sections on scroll into view
const callback = (entries) => 
  entries.forEach(entry => 
    entry.isIntersecting && entry.target.classList.add('show')
  );

const observer = new IntersectionObserver(callback);
const animate = document.querySelectorAll('.pattern');
animate.forEach(div => observer.observe(div));