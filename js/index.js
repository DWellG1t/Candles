// ScrollBy
function scrollAdd() {
    window.scrollBy(0, window.innerHeight);
}

// Observer
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('_intersection');
        }
    });
}, {rootMargin: "-30px"});

observer.observe(document.querySelector("#about"));
observer.observe(document.querySelector("#picture"));
observer.observe(document.querySelector("#shop"));