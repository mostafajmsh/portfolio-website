/**
 * This JavaScript code adds an 'active' class to the navigation menu link corresponding to the
 * currently scrolled section on the page.
 */
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
console.log(sections);

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const navLink = document.querySelectorAll('.nav__link')
const navbarBurger = document.querySelector('.navbar-burger')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('show')
    document.body.classList.toggle("open");
}
navLink.forEach(n => n.addEventListener('click', linkAction))

window.addEventListener('scroll', scrollActive)

/* The `navbarBurger.addEventListener('click', () => { ... })` code block is adding an event listener
to the navbarBurger element, which is triggered when the element is clicked. */
navbarBurger.addEventListener('click', () => {
    navbarBurger.innerHTML = ''
/* The code block you provided is responsible for dynamically changing the icon inside the
`navbarBurger` element based on the class name of the `document.body` element. */
    if (document.body.className === 'light') {
        navbarBurger.insertAdjacentHTML('beforeend', `
        <i class="fas fa-bars" style="font-size: 2rem; color: #006da4;"></i>
        `)
    } else if (document.body.className === 'light open') {
        navbarBurger.insertAdjacentHTML('beforeend', `
        <i class="fas fa-xmark" style="font-size: 2rem; color: #006da4;"></i>
        `)
    } else if (document.body.className === '') {
        navbarBurger.insertAdjacentHTML('beforeend', `
        <i class="fas fa-bars" style="font-size: 2rem; color: var(--white-color);"></i>
        `)
    } else if (document.body.className === 'open') {
        navbarBurger.insertAdjacentHTML('beforeend', `
        <i class="fas fa-xmark" style="font-size: 2rem; color: var(--white-color);"></i>
        `)
    }
})
