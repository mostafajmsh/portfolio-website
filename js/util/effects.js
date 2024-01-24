/* The code snippet is defining several constants and an event listener function in JavaScript. */
const bannerSection = document.getElementById("home"),
    skillsSection = document.querySelector('#skills'),
    workSection = document.querySelector('#works'),
    servicesSection = document.querySelector('#services'),
    blogSection = document.querySelector('#blog'),
    contactSection = document.querySelector('#comment'),
    bannerTitleElem = document.querySelector('.banner-title'),
    bannerTextElem = document.querySelector('.banner-text'),
    rightBtnElement = document.querySelector(".banner-right__btns"),
    bannerAboutElem = document.querySelector('.about'),
    leftImageElement = document.querySelector(".banner__img");

const setDelayFunction = (element, time, classMethod) => {

    setTimeout(() => {
        element.classList.add(classMethod)
    }, time);
}

document.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth > 767) {
        setDelayFunction(mainHeaderElem, 500, 'show__header');
    }
    setDelayFunction(bannerSection, 800, 'element-transformer-y');
    setDelayFunction(bannerTitleElem, 1200, 'element-transformer-y');
    setDelayFunction(bannerTextElem, 1600, 'element-transformer-y');
    setDelayFunction(rightBtnElement, 2000, 'element-transformer-y');
    setDelayFunction(leftImageElement, 2400, 'element-transformer-y');
    setDelayFunction(bannerAboutElem, 2800, 'element-transformer-y');

});

// Scroll Event Handler
const onScroll = (event) => {
    // effect for section scroll
    const scrollPosition = event.target.scrollingElement.scrollTop;

    // Toggle Section Visibility Function
    const toggleSectionVisibility = (section, threshold) => {
        const shouldShow = scrollPosition > threshold;
        section.classList.toggle('show-section', shouldShow);
        section.classList.toggle('hide-section', !shouldShow);
    };

    if (scrollPosition > 200) {
        bannerSection.style.backgroundSize = "150%";
    } else {
        bannerSection.style.backgroundSize = "180%";
    }

    toggleSectionVisibility(bannerSection, -1);
    toggleSectionVisibility(skillsSection, bannerSection.offsetHeight);
    toggleSectionVisibility(servicesSection, bannerSection.offsetHeight + skillsSection.offsetHeight - 300);
    toggleSectionVisibility(workSection, bannerSection.offsetHeight + skillsSection.offsetHeight + servicesSection.offsetHeight - 500);
    toggleSectionVisibility(blogSection, bannerSection.offsetHeight + skillsSection.offsetHeight + servicesSection.offsetHeight + workSection.offsetHeight - 300);
    toggleSectionVisibility(contactSection, bannerSection.offsetHeight + skillsSection.offsetHeight + servicesSection.offsetHeight + workSection.offsetHeight + blogSection.offsetHeight - 300);

    const skillsContentText = document.querySelector('.skills__content-text')
    const skillProgressBars = document.querySelectorAll('.progress')
    const skillProgressTextWrappers = document.querySelectorAll('.progress-text__wrapper')
    const jsProgressBar = document.querySelector('.js-progress .progress-bar')
    const htmlProgressBar = document.querySelector('.html-progress .progress-bar')
    const cssProgressBar = document.querySelector('.css-progress .progress-bar')
    const uiProgressBar = document.querySelector('.ui-progress .progress-bar')
    const rightProgressBar = document.querySelectorAll('.progress .progress-right .progress-bar')


    if (skillsSection.classList.contains('show-section')) {
        setDelayFunction(skillsContentText, 200, 'element-transformer-y')
        skillProgressBars.forEach(progressBar => {
            setDelayFunction(progressBar, 1500, 'element-transformer-y')
        })
        skillProgressTextWrappers.forEach(progressText => {
            setDelayFunction(progressText, 1500, 'element-transformer-y')
        })

        jsProgressBar.style.animation = 'loading-js 1.5s linear forwards 3.6s'
        htmlProgressBar.style.animation = 'loading-html 1.5s linear forwards 3.6s'
        cssProgressBar.style.animation = 'loading-css 1.5s linear forwards 3.6s'
        uiProgressBar.style.animation = 'loading-ui 1.5s linear forwards 3.6s'
        rightProgressBar.forEach(rightProgress => {
            rightProgress.style.animation = 'loading-1 1.8s linear forwards 1.8s'
        })
    } else {
        skillsContentText.classList.remove('element-transformer-y')
        skillProgressBars.forEach(progressBar => {
            progressBar.classList.remove('element-transformer-y')
        })
        skillProgressTextWrappers.forEach(progressText => {
            progressText.classList.remove('element-transformer-y')
        })
        jsProgressBar.style.animation = 'unset'
        htmlProgressBar.style.animation = 'unset'
        cssProgressBar.style.animation = 'unset'
        uiProgressBar.style.animation = 'unset'
        rightProgressBar.forEach(rightProgress => {
            rightProgress.style.animation = 'unset'
        })
    }

    const webDesignBoxElem = document.querySelector('.web-design')
    const uxBoxElem = document.querySelector('.user-experience')
    const responsiveDesignBoxElem = document.querySelector('.responsive-design')
    const supportBoxElem = document.querySelector('.support-box')
    const seoBoxElem = document.querySelector('.seo-box')

    if (servicesSection.classList.contains('show-section')) {
        setDelayFunction(webDesignBoxElem, 500, 'element-transformer-y')
        setDelayFunction(uxBoxElem, 1000, 'element-transformer-y')
        setDelayFunction(responsiveDesignBoxElem, 1500, 'element-transformer-y')
        setDelayFunction(supportBoxElem, 2000, 'element-transformer-y')
        setDelayFunction(seoBoxElem, 2500, 'element-transformer-y')
    } else {
        webDesignBoxElem.classList.remove('element-transformer-y')
        uxBoxElem.classList.remove('element-transformer-y')
        responsiveDesignBoxElem.classList.remove('element-transformer-y')
        supportBoxElem.classList.remove('element-transformer-y')
        seoBoxElem.classList.remove('element-transformer-y')
    }
};

document.addEventListener("scroll", onScroll);