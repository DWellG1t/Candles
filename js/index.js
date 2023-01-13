// burger 
const burger = document.querySelector(".contact__box_burger");
const nav = document.querySelector(".contact");
burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
});

// ScrollBy
function scrollAdd(num) {
    window.scroll(0, window.innerHeight * num); 
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

// shop nav
const candleType = document.querySelector(".section-shop__cards_candles");
const bombType = document.querySelector(".section-shop__cards_bombs");
const allTypes = document.querySelectorAll(".section-shop__cards");

const navShop = document.querySelectorAll(".section-shop__nav li");

const candle = document.querySelector("#candle");
candle.addEventListener("click", () => {
    navShop.forEach(el => {
        el.classList.remove("_active");
    })
    candle.classList.toggle("_active");
    // Добавить к товарам 
    allTypes.forEach(el => { el.classList.remove("_active") });
    candleType.classList.toggle("_active");

});

const bomb = document.querySelector("#bomb");
bomb.addEventListener("click", () => {
    navShop.forEach(el => {
        el.classList.remove("_active");
    })
    bomb.classList.toggle("_active");
    // добавить к товарам
    allTypes.forEach(el => { el.classList.remove("_active") });
    bombType.classList.toggle("_active");

});

