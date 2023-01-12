// ScrollBy
function scrollAdd() {
    window.scrollBy(0, window.innerHeight);
}

const observer = new IntersectionObserver(entires => {
    for(let el of entires) {
        if(el.isIntersecting) {
            el.classList.add("._intersection_active")
        }
    }
});

observer.observe(document.querySelectorAll("._intersection"))