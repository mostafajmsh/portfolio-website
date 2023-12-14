const switchElement = document.querySelector('.switch')
const logoImg = document.querySelector('.logo-img')

switchElement.addEventListener('click', function () {
    // Hint: Add 'dark' class to body :))

    /* The code block you provided is responsible for toggling the theme of the webpage when the switch
    element is clicked. Here's a breakdown of what it does: */
    document.body.classList.toggle('light')
    navbarBurger.innerHTML = ''

    if (document.body.className.includes('light')) {
        localStorage.setItem('theme', 'light')
        navbarBurger.insertAdjacentHTML('beforeend', `
    <i class="fas fa-bars" style="font-size: 2rem; color: #006da4;"></i>
    `)
        logoImg.src = './images/j-technologies-high-resolution-logo-black-transparent.png'
    } else {
        localStorage.setItem('theme', 'dark')
        navbarBurger.insertAdjacentHTML('beforeend', `
    <i class="fas fa-bars" style="font-size: 2rem; color: var(--white-color);"></i>
    `)
        logoImg.src = './images/j-technologies-high-resolution-logo-transparent.png'
    }


    // console.log(document.body.className.includes('dark'));  // Boolean
})


window.onload = function () {
    /* This code block is checking the value stored in the `localStorage` with the key 'theme'. If the
    value is 'light', it adds the 'light' class to the `document.body` element and inserts an HTML
    element with a light color icon. If the value is not 'light', it removes the 'light' class from the
    `document.body` element and inserts an HTML element with a white color icon. This code is
    responsible for setting the initial theme based on the value stored in `localStorage`. */
    let localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'light') {
        document.body.classList.add('light')
        navbarBurger.insertAdjacentHTML('beforeend', `
        <i class="fas fa-bars" style="font-size: 2rem; color: #006da4;"></i>
        `)
        logoImg.src = './images/j-technologies-high-resolution-logo-black-transparent.png'
    } else {
        document.body.classList.remove('light')
        navbarBurger.insertAdjacentHTML('beforeend', `
        <i class="fas fa-bars" style="font-size: 2rem; color: var(--white-color);"></i>
        `)
        logoImg.src = './images/j-technologies-high-resolution-logo-transparent.png'

    }

}