// ScrollBy
function scrollAdd() {
    window.scrollBy(0, window.innerHeight);
}

// Observer
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

    if (entry.isIntersecting) {
        entry.target.classList.add('_intersection_active');
        }
    });
}, {rootMargin: '0, 500px'});

observer.observe(document.querySelectorAll("._intersection"));