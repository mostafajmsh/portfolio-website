/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const mainHeaderElem = document.querySelector('.main-header');
const scrolledHeaderElem = document.querySelector('.scrolled-header');
const headerCloseBtn = document.querySelector('.header-close');

headerCloseBtn.addEventListener('click', () => {
    scrolledHeaderElem.classList.toggle('centered');
    headerCloseBtn.classList.toggle('menu-close__position');
})

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');

        const link = document.querySelector('.main-header .nav__menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop - 100 && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        const scrolledLink = document.querySelector('.scrolled-header .nav__menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop - 100 && scrollY <= sectionTop + sectionHeight) {
            scrolledLink.classList.add('active');
        } else {
            scrolledLink.classList.remove('active');
        }
    })
}

// Scroll event listener for handling scroll activity
window.addEventListener('scroll', scrollActive)

const scrollHandler = () => {
    if (window.scrollY > 200) {
        mainHeaderElem.style.display = 'none'
        scrolledHeaderElem.style.display = 'flex'
        scrolledHeaderElem.classList.remove('hidden')
    } else {
        mainHeaderElem.style.display = 'flex'
        scrolledHeaderElem.style.display = 'none'
        scrolledHeaderElem.classList.add('hidden')
    }
}

window.addEventListener('load', () => {

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 767) {
            scrollHandler()
        }
    });
});
