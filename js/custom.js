// on arrow down click, scroll to first section
document.addEventListener('click', function (event) {
	if (!event.target.matches('#arrow-down')) return;
	document.querySelector('section').scrollIntoView({behavior: 'smooth'});
}, false);

// Move pattern on scroll
const scrollElement = document.querySelector(".pattern");
const scrollOffset = 100;
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})