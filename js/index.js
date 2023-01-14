// Mobile
const isMobile = {
Android: function() {
    return navigator.userAgent.match(/Android/i);
},
BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
},
any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}
};

if (isMobile.any()) {
document.querySelector("body").classList.add("_mobile");
} else {
document.querySelector("body").classList.add("_desk");
}

// heights
// function setHeight() {
//     const firstSection = document.querySelector(".section-first");
//     const aboutSection = document.querySelector(".section-about");

//     firstSection.style.height = window.innerHeight + 'px';
//     aboutSection.style.height = window.innerHeight + 'px';

// }
// setHeight();

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
observer.observe(document.querySelector("#info"));

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

// info

const cross1 = document.querySelector(".section-info__cross_1");
const cross2 = document.querySelector(".section-info__cross_2");
const cross3 = document.querySelector(".section-info__cross_3");
const cross4 = document.querySelector(".section-info__cross_4");

let crossArr = [cross1, cross2, cross3, cross4];
let elArr = [document.querySelector(".section-info__el_1"), document.querySelector(".section-info__el_2"), document.querySelector(".section-info__el_3"), document.querySelector(".section-info__el_4")]

crossArr.forEach((el, ind) => {

    el.addEventListener("click", () => {

        // crossArr.forEach((cross) => {
        //     if(cross !== el)
        //         cross.classList.remove("_active");
        // });

        el.classList.toggle("_active");


        // elArr.forEach((element, index) => {
        //     if(element !== elArr[ind]) {
        //         element.classList.remove("_active");
        //     }
        // });
        elArr[ind].classList.toggle("_active");
    })

})
