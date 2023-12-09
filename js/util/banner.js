const h1 = document.getElementById("h1"),
    textElem = document.querySelector('.banner-text'),
    banner = document.getElementById("home"),
    bannerButtons = document.querySelector(".banner-right__btns"),
    bannerImg = document.querySelector('.banner__img'),
    aboutSection = document.getElementById('about-container');

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    console.log(scrollPosition);
    if (scrollPosition > 150) {
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
    if (scrollPosition > 180) {
        aboutSection.style.opacity = 1;
        aboutSection.style.translate = 0;
        aboutSection.style.scale = 1;
    } else {
        aboutSection.style.opacity = 0;
        aboutSection.style.translate = "0 -50px";
        aboutSection.style.scale = "0.8";
    }
};

document.addEventListener("scroll", onScroll);