const switchElement = document.querySelectorAll('.switch');
const htmlElem = document.querySelector('html')

// Update the theme and logo based on the light/dark mode toggle
function updateTheme(isDark) {
    htmlElem.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

switchElement.forEach(element => {
    element.addEventListener('click', function () {
        const isLightMode = htmlElem.classList.toggle('dark');
        updateTheme(isLightMode);
    });
})

// Set the theme on page load based on the stored value in localStorage
window.onload = function () {
    updateTheme(localStorage.getItem('theme') === 'dark');
};