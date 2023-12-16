const switchElement = document.querySelector('.switch');
const logoImg = document.querySelector('.logo-img');

// Update the theme and logo based on the light/dark mode toggle
function updateTheme(isLight) {
    document.body.classList.toggle('light', isLight);
    const logoSrc = isLight ? './images/logo-black.png' : './images/logo-gold-transparent.png';
    logoImg.src = logoSrc;
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

switchElement.addEventListener('click', function () {
    const isLightMode = document.body.classList.toggle('light');
    updateTheme(isLightMode);
});

// Set the theme on page load based on the stored value in localStorage
window.onload = function () {
    updateTheme(localStorage.getItem('theme') === 'light');
};