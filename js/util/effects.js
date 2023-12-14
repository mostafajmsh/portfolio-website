/* The code snippet is defining several constants and an event listener function in JavaScript. */
const h1 = document.getElementById("h1"),
    textElem = document.querySelector('.banner-text'),
    banner = document.getElementById("home"),
    bannerButtons = document.querySelector(".banner-right__btns"),
    bannerImg = document.querySelector('.banner__img'),
    aboutSection = document.getElementById('about-container'),
    skillsSection = document.querySelector('#skills'),
    workSection = document.querySelector('#works'),
    servicesSection = document.querySelector('#services');

/**
 * The function `onScroll` applies different effects to different sections of a webpage based on the
 * scroll position.
 * @param event - The `event` parameter represents the scroll event that is triggered when the user
 * scrolls the page. It contains information about the scroll event, such as the target element that is
 * being scrolled (`event.target`) and the current scroll position
 * (`event.target.scrollingElement.scrollTop`).
 */
const onScroll = (event) => {
    // effect for section scroll
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 400) {
        banner.style.backgroundSize = "150%";
        h1.style.opacity = 0;
        h1.style.translate = "0 -50px";
        h1.style.scale = "0.9";
        textElem.style.opacity = 0;
        textElem.style.translate = "0 -50px";
        textElem.style.scale = "0.9";
        bannerButtons.style.opacity = 0;
        bannerButtons.style.translate = "0 -50px";
        bannerButtons.style.scale = "0.8";
        bannerImg.style.opacity = 0;
        bannerImg.style.translate = "0 -50px";
        bannerImg.style.scale = "0.8";
    } else {
        banner.style.backgroundSize = "180%";
        h1.style.opacity = 1;
        h1.style.translate = 0;
        h1.style.scale = 1;
        textElem.style.opacity = 1;
        textElem.style.translate = 0;
        textElem.style.scale = 1;
        bannerButtons.style.opacity = 1;
        bannerButtons.style.translate = 0;
        bannerButtons.style.scale = 1;
        bannerImg.style.opacity = 1;
        bannerImg.style.translate = 0;
        bannerImg.style.scale = 1;

    }
    if (scrollPosition > 300) {
        aboutSection.style.opacity = 1;
        aboutSection.style.translate = 0;
        aboutSection.style.scale = 1;
    } else {
        aboutSection.style.opacity = 0;
        aboutSection.style.translate = "0 -50px";
        aboutSection.style.scale = "0.8";
    }

    if (scrollPosition > 800) {
        skillsSection.style.opacity = 1;
        skillsSection.style.translate = 0;
        skillsSection.style.scale = 1;
    } else {
        skillsSection.style.opacity = 0;
        skillsSection.style.translate = "0 -50px";
        skillsSection.style.scale = "0.8";
    }

    if (scrollPosition > 1400) {
        servicesSection.style.opacity = 1;
        servicesSection.style.translate = 0;
        servicesSection.style.scale = 1;
    } else {
        servicesSection.style.opacity = 0;
        servicesSection.style.translate = "0 -50px";
        servicesSection.style.scale = "0.8";
    }

    if (scrollPosition > 1800) {
        workSection.style.opacity = 1;
        workSection.style.translate = 0;
        workSection.style.scale = 1;
    } else {
        workSection.style.opacity = 0;
        workSection.style.translate = "0 -50px";
        workSection.style.scale = "0.8";
    }
    console.log(scrollPosition);
};

document.addEventListener("scroll", onScroll);