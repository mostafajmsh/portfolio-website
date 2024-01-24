const swiper = new Swiper('.swiper-container', {
    speed: 800,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredItems: true
        },
        590: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredItems: false
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

