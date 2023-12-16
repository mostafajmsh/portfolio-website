const swiper = new Swiper('.swiper-container', {
    speed: 800,
    loop: false,
    breakpoints: {
        200: {
            slidesPerView: 1
        },
        500: {
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
});

