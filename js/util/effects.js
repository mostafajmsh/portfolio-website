/* The code snippet is defining several constants and an event listener function in JavaScript. */
const bannerSection = document.getElementById("home"),
    aboutSection = document.getElementById('about'),
    skillsSection = document.querySelector('#skills'),
    workSection = document.querySelector('#works'),
    servicesSection = document.querySelector('#services'),
    blogSection = document.querySelector('#blog'),
    contactSection = document.querySelector('#contact');

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

    if (scrollPosition > bannerSection.offsetHeight) {
        bannerSection.style.backgroundSize = "150%";
        bannerSection.style.opacity = 0
    } else {
        bannerSection.style.backgroundSize = "180%";
        bannerSection.style.opacity = 1
    }
    // toggleSectionVisibility(bannerSection, 0);
    toggleSectionVisibility(aboutSection, bannerSection.offsetHeight - 300);
    toggleSectionVisibility(skillsSection, bannerSection.offsetHeight + aboutSection.offsetHeight - 300);
    toggleSectionVisibility(servicesSection, bannerSection.offsetHeight + aboutSection.offsetHeight + skillsSection.offsetHeight - 300);
    toggleSectionVisibility(workSection, bannerSection.offsetHeight + aboutSection.offsetHeight + skillsSection.offsetHeight + servicesSection.offsetHeight - 500);
    toggleSectionVisibility(blogSection, bannerSection.offsetHeight + aboutSection.offsetHeight + skillsSection.offsetHeight + servicesSection.offsetHeight + workSection.offsetHeight - 300);
    toggleSectionVisibility(contactSection, bannerSection.offsetHeight + aboutSection.offsetHeight + skillsSection.offsetHeight + servicesSection.offsetHeight + workSection.offsetHeight + blogSection.offsetHeight - 300);

};

document.addEventListener("scroll", onScroll);

document.addEventListener("DOMContentLoaded", () => {
    const leftElement = document.querySelector(".banner-left");
    const rightElement = document.querySelector(".banner-right");

    setTimeout(() => {
        leftElement.style.transform = "translateX(0)";
        rightElement.style.transform = "translateX(0)";
    }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    const siteHeader = document.querySelector(".header");

    // Delay the header animation for better visibility
    setTimeout(() => {
        siteHeader.style.top = "0";
    }, 500);
});
