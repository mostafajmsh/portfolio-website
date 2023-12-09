const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar-item a[href*=' + sectionId + ']').classList.add('active')
        }else{
          const prevActiveMenu = document.querySelector('.active')
          prevActiveMenu.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)