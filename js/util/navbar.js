/**
 * This JavaScript code adds an 'active' class to the navigation menu link corresponding to the
 * currently scrolled section on the page.
 */
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
console.log(sections);

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const navLink = document.querySelectorAll('.nav__link')
const navbarBurger = document.querySelector('.navbar-burger')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('show')
    document.body.classList.toggle("open");
}
navLink.forEach(n => n.addEventListener('click', linkAction))

window.addEventListener('scroll', scrollActive)