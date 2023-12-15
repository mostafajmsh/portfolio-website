/* The code is creating a new instance of the Swiper class and assigning it to the `swiper` constant.
The Swiper class is a JavaScript library that provides a touch-enabled slider component. */
const swiper = new Swiper('.swiper-container', {
    speed: 800,
    loop: false,

    breakpoints: {
        576: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})