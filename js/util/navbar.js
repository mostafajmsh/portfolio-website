/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav__link')
const navbarBurger = document.querySelector('.navbar-burger')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    })
}

// Function to toggle navigation menu visibility and set body open/close class
function toggleNavMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('show')
    document.body.classList.toggle('open')
}

// Attach click event listener to each navigation link to toggle the menu
navLinks.forEach(link => link.addEventListener('click', toggleNavMenu))

// Scroll event listener for handling scroll activity
window.addEventListener('scroll', scrollActive)

// Click event listener for the navbar burger icon to toggle body class and update the icon
navbarBurger.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('open')
    const iconClass = isOpen ? 'fa-xmark' : 'fa-bars'
    navbarBurger.innerHTML = `<i class="fas ${iconClass}" style="font-size: 2rem; color: #4daddd;"></i>`
})