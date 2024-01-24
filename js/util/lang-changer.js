const portfolioTitleElem = document.querySelector('.portfolio-title');
const articlesTitleElem = document.querySelector('.articles-title');
const commentsTitleElem = document.querySelector('.comments-title');
const commentsForm = document.querySelector('.comments__form');
const bannerSectionContent = document.querySelector('.banner-content')
const articleSliderWrapper = document.querySelector('.swiper')
const footerLinksWrapper = document.querySelector('.footer-links')
const footerInfoSection = document.querySelector('.footer-info')
const navListElem = document.querySelector('.main-header .nav__list');
const langChangerElem = document.querySelectorAll('.nav__lang-changer');
const langChangerText = document.querySelectorAll('.lang__changer-text');

const changeToLtr = () => {
  htmlElem.dir = 'ltr';
  htmlElem.lang = 'en-US';
  langChangerText.forEach(text => text.innerHTML = `en-US` );
  navListElem.innerHTML = `
<li class="nav__item w-full md:px-0 items-center h-full text-white flex">
  <a href="#home" class="nav__link my-auto first-item gap-1 es:text-xs md:gap-0 text-nowrap hover:text-white w-full md:text-lg md:transition-all md:duration-300 md:h-[60%] md:rounded-xl md:items-center md:w-full md:text-center md:justify-center flex items-center h-full text-lg lg:text-xs font-bold relative text-darkColor md:text-slate-400 md:hover:text-white dark:text-slate-300 transition-all after:content-{'*'} after:absolute after:bottom-1 after:right-0 after:w-full after:h-0.5 after:rounded-sm after:bg-blue-700 h-full dark:after:bg-white after:scale-x-0 after:origin-right-{-50%} after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:transition-all hover:after:duration-200">
    <i class="fas fa-home ltr:lg:hidden ltr:md:flex"></i>
    <p class="md:hidden">HOME</p>
  </a>
</li>
<li class="nav__item w-full md:px-0 flex items-center h-full">
  <a href="#skills" class="nav__link gap-1 md:gap-0 text-nowrap es:text-xs hover:text-white w-full md:text-lg md:transition-all md:duration-300 md:h-[60%] md:rounded-xl md:items-center md:w-full md:text-center md:justify-center flex items-center h-full text-lg lg:text-xs font-bold relative text-darkColor md:text-slate-400 md:hover:text-white dark:text-slate-300 transition-all after:content-{'*'} after:absolute after:bottom-1 after:right-0 after:w-full after:h-0.5 after:rounded-sm after:bg-blue-700 h-full dark:after:bg-white after:scale-x-0 after:origin-right-{-50%} after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:transition-all hover:after:duration-200" style="animation-delay: 0.3s">
    <i class="fas fa-laptop-code ltr:lg:hidden ltr:md:flex"></i>
    <p class="md:hidden">SKILLS</p>
  </a>
</li>
<li class="nav__item w-full md:px-0 flex items-center h-full">
  <a href="#services" class="nav__link gap-1 md:gap-0 text-nowrap es:text-xs hover:text-white w-full md:text-lg md:transition-all md:duration-300 md:h-[60%] md:rounded-xl md:items-center md:w-full md:text-center md:justify-center flex items-center h-full text-lg lg:text-xs font-bold relative text-darkColor md:text-slate-400 md:hover:text-white dark:text-slate-300 transition-all after:content-{'*'} after:absolute after:bottom-1 after:right-0 after:w-full after:h-0.5 after:rounded-sm after:bg-blue-700 h-full dark:after:bg-white after:scale-x-0 after:origin-right-{-50%} after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:transition-all hover:after:duration-200" style="animation-delay: 0.4s">
    <i class="fas fa-gem ltr:lg:hidden ltr:md:flex"></i>
    <p class="md:hidden">SERVICES</p>
  </a>
</li>

<li class="nav__item w-full md:px-0 flex items-center h-full">
  <a href="#works" class="nav__link gap-1 md:gap-0 text-nowrap es:text-xs hover:text-white w-full md:text-lg md:transition-all md:duration-300 md:h-[60%] md:rounded-xl md:items-center md:w-full md:text-center md:justify-center flex items-center h-full text-lg lg:text-xs font-bold relative text-darkColor md:text-slate-400 md:hover:text-white dark:text-slate-300 transition-all after:content-{'*'} after:absolute after:bottom-1 after:right-0 after:w-full after:h-0.5 after:rounded-sm after:bg-blue-700 h-full dark:after:bg-white after:scale-x-0 after:origin-right-{-50%} after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:transition-all hover:after:duration-200" style="animation-delay: 0.5s">
    <i class="fas fa-briefcase ltr:lg:hidden ltr:md:flex"></i>
    <p class="md:hidden">PORTFOLIO</p>
  </a>
</li>

<li class="nav__item w-full md:px-0 flex items-center h-full">
  <a href="#blog" class="nav__link gap-1 md:gap-0 text-nowrap es:text-xs hover:text-white w-full md:text-lg md:transition-all md:duration-300 md:h-[60%] md:rounded-xl md:items-center md:w-full md:text-center md:justify-center flex items-center h-full text-lg lg:text-xs font-bold relative text-darkColor md:text-slate-400 md:hover:text-white dark:text-slate-300 transition-all after:content-{'*'} after:absolute after:bottom-1 after:right-0 after:w-full after:h-0.5 after:rounded-sm after:bg-blue-700 h-full dark:after:bg-white after:scale-x-0 after:origin-right-{-50%} after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:transition-all hover:after:duration-200" style="animation-delay: 0.6s">
    <i class="fas fa-rss ltr:lg:hidden ltr:md:flex"></i>
    <p class="md:hidden">ARTICLES</p>
  </a>
</li>

<li class="nav__item w-full md:px-0 flex items-center h-full">
  <a href="#comment" class="nav__link comment-link gap-1 md:gap-0 text-nowrap es:text-xs hover:text-white w-full md:text-lg md:transition-all md:duration-300 md:h-[60%] md:rounded-xl md:items-center md:w-full md:text-center md:justify-center flex items-center h-full text-lg lg:text-xs font-bold relative text-darkColor md:text-slate-400 md:hover:text-white dark:text-slate-300 transition-all after:content-{'*'} after:absolute after:bottom-1 after:right-0 after:w-full after:h-0.5 after:rounded-sm after:bg-blue-700 h-full dark:after:bg-white after:scale-x-0 after:origin-right-{-50%} after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:transition-all hover:after:duration-200" style="animation-delay: 0.6s">
    <i class="fas fa-comment ltr:lg:hidden ltr:md:flex"></i>
    <p class="md:hidden">COMMENTS</p>
  </a>
</li>

<li class="nav__item w-full md:px-0 flex items-center h-full">
  <a href="#footer" class="nav__link footer-link gap-1 md:gap-0 text-nowrap es:text-xs hover:text-white w-full md:text-lg md:transition-all md:duration-300 md:h-[60%] md:rounded-xl md:items-center md:w-full md:text-center md:justify-center flex items-center h-full text-lg lg:text-xs font-bold relative text-darkColor md:text-slate-400 md:hover:text-white dark:text-slate-300 transition-all after:content-{'*'} after:absolute after:bottom-1 after:right-0 after:w-full after:h-0.5 after:rounded-sm after:bg-blue-700 h-full dark:after:bg-white after:scale-x-0 after:origin-right-{-50%} after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:transition-all hover:after:duration-200" style="animation-delay: 0.6s">
    <i class="fas fa-envelope ltr:lg:hidden ltr:md:flex"></i>
    <p class="md:hidden">CONTACT</p>
  </a>
</li>
`;
  bannerTitleElem.innerHTML = `
<span
class="text-white bg-blue-700 dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 rounded-tl-[7rem] pl-4 pr-2 rounded-r-[4rem] rounded-bl-[14rem]"
>MOSTAFA</span>
<span
class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
>JAMSHIDI</span>
`;
  bannerTextElem.innerHTML = `
FRONTEND WEB DEVELOPER
`;
  rightBtnElement.innerHTML = `
<a
  href="https://github.com/mostafajmsh"
  class="py-3 font-bold es:py-2 px-10 es:px-5 flex-row-reverse text-nowrap opacity-100 es:text-sm text-xl no-underline transition-all hover:transition-all hover:bg-white hover:text-blue-700 rounded-lg bg-slate-700 text-white flex items-center justify-center gap-2"
  id="button-resume"
  >GITHUB <i class="fab fa-github text-inherit"></i>
</a>
<a
  href="#works"
  id="button-works"
  class="py-3 font-bold es:py-2 px-10 es:px-5 flex-row-reverse text-nowrap opacity-100 es:text-sm gap-2 text-xl no-underline transition-all hover:transition-all hover:bg-white hover:text-blue-700 rounded-lg bg-blue-700 dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 text-slate-50 flex justify-center items-center"
  >PORTFOLIO <i class="fas fa-briefcase text-inherit"></i>
</a>
`;
  bannerAboutElem.innerHTML = `
<div class="about-content flex justify-start w-full">
<div class="about__content-right">
  <p
    class="text-4xl es:text-2xl w-full text-left text-blue-700 ltr:font-enTitleFont"
  >
    <span
      class="text-white bg-blue-700 dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 pl-4 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem]"
      >ABOUT</span
    >
    <span
      class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
      > ME</span>
  </p>
  <p
    class="about__content-title min-title dark:text-slate-300 text-left font-bold text-2xl es:text-xl mt-8"
  >
    I AM MOSTAFA
  </p>
  <p class="about__content-text dark:text-slate-300 text-left md:mr-2 text-xl md:text-base es:text-sm mt-2">
  Hello! I'm Mostafa, working in the field of <span class="font-bold"> frontend web development</span>. I love coding and, of course, coffee. If you share these two passions, then you're my kind of friend 😁. As my mentor says, no one in programming can claim to know everything; we are all in a continuous learning process, and I truly enjoy learning new things in this field. My abilities include creating and developing various websites with different user interfaces, designing interactive and beautiful styles, and implementing the logic of different parts of a site in an optimized way using JavaScript.
  To learn about my skills, please click
  <a href="#skills" class="text-blue-700 dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text hover:text-red-500 font-bold transition-all hover:transition-all">here</a>.
  Also, to view my portfolio, use
  <a href="#works" class="text-blue-700 dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text hover:text-red-500 font-bold transition-all hover:transition-all">this link</a>.
  If you have any questions or are interested in collaborating on a project, feel free to ask me. Thank you for being here!
</p>
</div>
</div>
`;
  skillsSection.innerHTML = `
<div
id="skills-container"
class="container flex flex-col justify-center items-center"
>
<p
  class="skills-title rtl:font-titleFont ltr:font-enTitleFont text-blue-700 text-5xl es:text-3xl"
>
  <span
    class="text-white bg-blue-700 pl-4 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
    >SK</span
  >
  <span
    class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
    >ILLS</span
  >
</p>

<p
  class="skills__content-title min-title text-blue-700 rtl:font-titleFont ltr:font-enTitleFont text-3xl es:text-xl text-left w-full mt-8"
>
  <span
    class="bg-blue-700 pl-2 pr-1 text-white rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
    >PROFESSIONAL</span
  >
  <span
    class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
    >SKILLS</span
  >
</p>
<p
  class="skills__content-text text-left -translate-y-20 opacity-0 transition-all duration-1000 mt-8 text-xl dark:text-slate-300 es:text-base"
>
  As a front-end developer with experience in various web technologies and design, I have acquired robust skills in these domains. Below, I elaborate on some of these skills:
</p>
</div>
<div
class="skills-content flex bg-lightSkills dark:bg-darkSkills justify-center w-full bg-center bg-cover p-0 mt-12"
>
<div
  class="row flex justify-center container backdrop:blur-sm dark:backdrop-blur-md sm:pt-0"
>
  <div class="progresses xl:justify-center">
    <div class="js-progress progress-container sm:flex-col">
      <div
        class="progress translate-y-20 opacity-0 transition-all duration-1000 flex items-center blue"
      >
        <span class="progress-left left-0">
          <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
          <span class="progress-bar"></span>
        </span>
        <div
          class="progress-value text-darkColor dark:text-slate-300 rtl:font-titleFont ltr:font-enTitleFont"
        >
          80%
        </div>
      </div>
      <div
        class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 text-darkColor text-left"
      >
        <ol class="flex flex-col text-left sm:justify-center sm:mt-4">
        <li class="progress-title relative text-start text-blue-700 pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-blue-700 dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0">
          <span class="text-white bg-blue-700 dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 pl-2 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem]">JAVA</span>
          <span class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text">SCRIPT</span>
        </li>
        <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Proficiency in JavaScript and interactive web development skills.
        </li>
        <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Experience in using the latest features and APIs of JavaScript.
        </li>
        <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Familiarity with and use of popular JavaScript libraries (SweetAlert, SwiperJS, ChartJS, ...) to enhance code speed and quality.
        </li>
        </ol>
      </div>
    </div>
    <div class="html-progress progress-container sm:flex-col">
      <div
        class="progress translate-y-20 opacity-0 transition-all duration-1000 flex items-center blue"
      >
        <span class="progress-left">
          <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
          <span class="progress-bar"></span>
        </span>
        <div
          class="progress-value text-darkColor dark:text-slate-300 rtl:font-titleFont ltr:font-enTitleFont"
        >
          95%
        </div>
      </div>
      <div
        class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 text-darkColor dark:text-slate-300"
      >
        <ol class="flex flex-col sm:justify-center sm:mt-4">
          <li
            class="progress-title relative text-start text-blue-700 pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-blue-700 dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0"
          >
            <span
              class="text-white bg-blue-700 pl-2 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
              >HTM</span
            >
            <span
              class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
              >L5</span
            >
          </li>
          <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-left text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Implementation of HTML code in a structured and readable manner.
        </li>
        <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-left text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Awareness of the latest standards and technologies related to HTML for increasing website traffic and SEO.
        </li>
        
        </ol>
      </div>
    </div>
    <div class="css-progress progress-container sm:flex-col">
      <div
        class="progress translate-y-20 opacity-0 transition-all duration-1000 flex items-center blue"
      >
        <span class="progress-left">
          <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
          <span class="progress-bar"></span>
        </span>
        <div
          class="progress-value text-darkColor dark:text-slate-300 rtl:font-titleFont ltr:font-enTitleFont"
        >
          95%
        </div>
      </div>
      <div
        class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 text-darkColor dark:text-slate-300"
      >
        <ol class="flex flex-col sm:justify-center sm:mt-4">
          <li
            class="progress-title relative text-start text-blue-700 pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-blue-700 dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0"
          >
            <span
              class="text-white bg-blue-700 pl-2 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
              >CS</span
            >
            <span
              class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
              >S3</span
            >
          </li>
          <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-left text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Designing and implementing beautiful and responsive styles using CSS.
        </li>
        <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-left text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Proficiency in utilizing Flexbox and Grid, as well as popular CSS frameworks, for designing dynamic and flexible web pages.
        </li>
        </ol>
      </div>
    </div>
    <div class="ui-progress progress-container sm:flex-col">
      <div
        class="progress translate-y-20 opacity-0 transition-all duration-1000 flex items-center blue"
      >
        <span class="progress-left">
          <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
          <span class="progress-bar"></span>
        </span>
        <div
          class="progress-value text-darkColor dark:text-slate-300 rtl:font-titleFont ltr:font-enTitleFont"
        >
          90%
        </div>
      </div>
      <div
        class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 text-darkColor dark:text-slate-300"
      >
        <ol class="flex flex-col sm:justify-center sm:mt-4">
          <li
            class="progress-title relative text-start text-blue-700 pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-blue-700 dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0"
          >
            <span
              class="text-white bg-blue-700 pl-2 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
              >UI/</span
            >
            <span
              class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
              >UX</span
            >
          </li>
          <li class="progress-text md:text-base es:text-sm mt-2 list-disc text-left text-darkColor dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl max-w-[740px] transition-all duration-500">
          Effective User Experience (UX) design considering user needs and preferences. Creating visually appealing and user-friendly User Interface (UI).
        </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="more-skills w-full mt-8 pb-16">
    <ol class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 flex flex-col w-full sm:justify-center sm:mt-8">
      <li class="progress-title relative text-start text-white pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-white dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0">
        <span class="text-blue-700 bg-white pl-2 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r dark:text-white from-sky-400 via-indigo-500 to-red-400">Frameworks</span>
        <span class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"> and Technologies</span>
      </li>
      <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
        Proficiency in using modern frameworks such as Tailwind CSS and Bootstrap for facilitating design and styling.
      </li>
      <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
        Ability to customize and apply advanced settings using these frameworks.
      </li>
    </ol>
  <ol class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 flex flex-col w-full mt-8 sm:justify-center sm:mt-8">
    <li class="progress-title relative text-start text-white pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-white dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0">
      <span class="text-blue-700 bg-white pl-2 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:text-white dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400">Communication</span>
      <span class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"> Skills</span>
    </li>
    <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
      Effective and active communication with development teams and various departments.
    </li>
    <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
      Ability to articulate and explain technical concepts clearly and comprehensibly to non-technical audiences.
    </li>
  </ol>
  <ol class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 flex flex-col w-full sm:justify-center mt-8">
  <li class="progress-title relative text-start text-white pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-white dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0">
    <span class="text-blue-700 bg-white pl-2 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:text-white dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400">Tools</span>
    <span class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"> and Technologies</span>
  </li>
  <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
    Proficient use of npm for package and dependency management.
  </li>
  <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
    Skillful application of Git and GitHub for project version control.
  </li>
  <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
    Familiarity with RESTful API principles and the ability to manage and use such APIs in projects.
  </li>
  <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
    Experience in using Postman for testing and debugging API requests.
  </li>
  <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
    Proficiency in designing and coding based on layouts created in Figma.
  </li>
</ol>
<ol class="progress-text__wrapper -translate-y-20 opacity-0 transition-all duration-1000 flex flex-col w-full mt-8 sm:justify-center sm:mt-8">
  <li class="progress-title relative text-start text-white pb-2 rtl:font-titleFont ltr:font-enTitleFont text-2xl font-bold border-b-2 border-solid border-white dark:border-none dark:after:absolute dark:after:content-[''] dark:after:w-full dark:after:bottom-0 dark:after:h-[2px] dark:after:bg-gradient-to-r dark:after:from-sky-400 dark:after:via-indigo-500 dark:after:to-red-400 dark:after:left-0">
    <span class="text-blue-700 bg-white pl-2 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:text-white dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400">Extras</span>
    <span class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"> Milestones</span>
  </li>
  <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
    Ability to execute unit tests and ensure the correct functionality of the code.
  </li>
  <li class="progress-text md:text-base es:text-sm mr-8 mt-4 es:mt-2 list-disc text-left text-slate-200 dark:text-slate-300 ltr:font-enPrimaryFont font-bold text-xl transition-all duration-500">
    Experience in optimizing websites to improve speed and efficiency.
  </li>
</ol>
  </div>
</div>
</div>
`;
  servicesSection.innerHTML = `
<div
id="services-container"
class="container flex flex-col items-center"
>
<p
  class="skills-title ltr:font-enTitleFont text-blue-700 text-5xl es:text-3xl"
>
  <span
    class="text-white bg-blue-700 pl-4 pr1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
    >MY</span
  >
  <span
    class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
    >SERVICES</span
  >
</p>

<p class="text-left mt-8 text-xl dark:text-slate-300 es:text-base">
  With over 2 years of experience in frontend development, I, Mostafa Jamshidi, proudly offer my services as an active and creative frontend developer. If you are looking for an independent and specialized web development expert, stay with me.
</p>
<div
  class="services-content relative dark:bg-[#1d1d20] dark:rounded-xl py-8 flex flex-wrap items-center justify-center gap-8 w-full mt-20 before:content-[''] before:w-[40%] before:h-[50%] xl:before:w-[45%] lg:before:w-[50%] lg:before:h-[50%] md:before:w-[40%] md:before:h-[80%] md:before:mt-96 before:absolute before:bg-gradient-to-b before:from-blue-700 before:to-blue-300 dark:before:bg-gradient-to-br dark:before:from-sky-400 dark:before:via-indigo-500 dark:before:to-red-400 before:z-0 before:top-0 before:bottom-0 before:my-auto"
>
  <div
    class="bg-white dark:bg-[#292931] web-design -translate-y-20 opacity-0 transition-all duration-1000 services__content-box flex flex-col items-center shadow-lg py-16 px-4 rounded-lg max-w-72 min-w-60 h-[432px] hover:-translate-y-1 hover:duration-200"
  >
    <i
      class="fas fa-paintbrush services__content-icon text-blue-700 text-2xl dark:text-red-400"
    ></i>
    <p
      class="services-bold-text dark:text-slate-300 text-xl font-bold mt-2"
    >
      Website Design
    </p>
    <p
      class="services__content-text dark:text-slate-300 text-center mt-2"
    >
      Utilizing my expertise in HTML, CSS, and JavaScript, I bring your websites to life with attractive design and high performance. From small details like element arrangement to optimizing source code, every aspect of the website is meticulously handled by me.
    </p>
  </div>
  <div
    class="bg-white dark:bg-[#292931] user-experience -translate-y-20 opacity-0 transition-all duration-1000 services__content-box flex flex-col items-center shadow-lg py-16 px-4 rounded-lg max-w-72 min-w-60 h-[432px] hover:-translate-y-1 hover:duration-200"
  >
    <i
      class="fas fa-laptop-code services__content-icon text-blue-700 text-2xl dark:text-red-400"
    ></i>
    <p
      class="services-bold-text dark:text-slate-300 text-xl font-bold mt-2"
    >
      User Experience
    </p>
    <p
      class="services__content-text dark:text-slate-300 text-center mt-2"
    >
      With a focus on user experience, I strive for continuous improvement in the user experience of your websites. From user analysis to designing an engaging user interface, every aspect is conducted with the aim of creating an exceptional user experience.
    </p>
  </div>
  <div
    class="bg-white dark:bg-[#292931] responsive-design -translate-y-20 opacity-0 transition-all duration-1000 services__content-box flex flex-col items-center shadow-lg py-16 px-4 rounded-lg max-w-72 min-w-60 h-[432px] hover:-translate-y-1 hover:duration-200"
  >
    <i
      class="fas fa-layer-group services__content-icon text-blue-700 text-2xl dark:text-red-400"
    ></i>
    <p
      class="services-bold-text dark:text-slate-300 text-xl font-bold mt-2"
    >
      Responsive Design
    </p>
    <p
      class="services__content-text dark:text-slate-300 text-center mt-2"
    >
      Websites designed and developed by me are well-displayed with device-friendly designs. This allows your users to enjoy your website without restrictions on various devices.
    </p>
  </div>
  <div
    class="bg-white dark:bg-[#292931] support-box translate-y-20 opacity-0 transition-all duration-1000 services__content-box flex flex-col items-center shadow-lg py-16 px-4 rounded-lg max-w-72 min-w-60 h-[432px] hover:-translate-y-1 hover:duration-200"
  >
    <i
      class="fas fa-headset services__content-icon text-blue-700 text-2xl dark:text-red-400"
    ></i>
    <p
      class="services-bold-text dark:text-slate-300 text-center text-xl font-bold mt-2"
    >
      Support and Maintenance
    </p>
    <p
      class="services__content-text dark:text-slate-300 text-center mt-2"
    >
      After deployment, I am available for technical support for two months. I promptly address and resolve any technical issues or questions to keep your website running optimally.
    </p>
  </div>
  <div
    class="bg-white dark:bg-[#292931] seo-box -translate-y-20 opacity-0 transition-all duration-1000 services__content-box flex flex-col items-center shadow-lg py-16 px-4 rounded-lg max-w-72 min-w-60 h-[432px] hover:-translate-y-1 hover:duration-200"
  >
    <i
      class="fab fa-searchengin text-blue-700 text-2xl dark:text-red-400"
    ></i>
    <p
      class="services-bold-text text-xl dark:text-slate-300 text-center font-bold mt-2"
    >
      Search Engine Optimization (SEO)
    </p>
    <p
      class="services__content-text dark:text-slate-300 text-center mt-2"
    >
      By providing optimization services for search engines, your website will have the best chance of attracting aware and quality traffic from search engines. From important keywords to link structure optimization, all aspects of SEO are managed by me.
    </p>
  </div>
</div>
</div>
`;
  portfolioTitleElem.innerHTML = `
    <span
    class="text-white bg-blue-700 pl-4 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
    >PORT</span
    >
    <span
    class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
    >FOLIO</span
    >
`;
  articlesTitleElem.innerHTML = `
    <span
    class="text-white bg-blue-700 pl-4 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
    >ART</span>
    <span
    class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
    >ICLES</span>
`;
  commentsTitleElem.innerHTML = `
    <span
    class="text-white bg-blue-700 pl-4 pr-1 rounded-tl-[7rem] rounded-bl-[14rem] rounded-r-[4rem] dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400"
    >SUBMIT</span
    >
    <span
    class="dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 dark:text-transparent dark:bg-clip-text"
    >COMMENTS</span
    >
`;
  commentsForm.innerHTML = `
    <div
    class="comments-input__wrapper flex justify-between gap-8 items-center w-full sm:flex-col sm:gap-0"
    >
      <input
        type="text"
        placeholder="NAME..."
        class="contact__input dark:bg-[#292931] dark:text-slate-300 p-4 mb-8 w-full rounded-lg border-none outline-none bg-none text-slate-700 bg-blue-700/10 shadow-lg transition-all focus:bg-slate-100 focus:transition-all"
      />
      <input
        type="mail"
        placeholder="EMAIL ADDRESS..."
        class="contact__input dark:bg-[#292931] dark:text-slate-300 p-4 mb-8 w-full rounded-lg border-none outline-none bg-none text-slate-700 bg-blue-700/10 shadow-lg transition-all focus:bg-slate-100 focus:transition-all"
      />
    </div>
    <textarea
      name=""
      id=""
      cols="0"
      rows="10"
      placeholder="WRITE YOUR COMMENT..."
      class="contact__input dark:bg-[#292931] dark:text-slate-300 p-4 mb-8 w-full rounded-lg border-none outline-none bg-none text-slate-700 bg-blue-700/10 shadow-lg transition-all focus:bg-slate-100 focus:transition-all"
    ></textarea>
    <input
      type="button"
      value="SEND"
      class="contact__button dark:bg-gradient-to-r from-sky-400 via-indigo-500 to-red-400 block border-none outline-none text-lg cursor-pointer mr-auto text-white bg-blue-700 rounded-lg font-bold py-2 px-10 shadow-lg transition-all hover:text-blue-700 hover:bg-white hover:transition-all"
    />
`;
  footerLinksWrapper.innerHTML = `
    <li>
      <a
        class="hover:text-white transition-all hover:transition-all"
        href="#home"
        >Home</a
      >
    </li>
    <li>
      <a
        class="hover:text-white transition-all hover:transition-all"
        href="#services"
        >Services</a
      >
    </li>
    <li>
      <a
        class="hover:text-white transition-all hover:transition-all"
        href="#works"
        >Portfolio</a
      >
    </li>
    <li>
      <a
        class="hover:text-white transition-all hover:transition-all"
        href="#skills"
        >Skills</a
      >
    </li>
`;
  footerInfoSection.innerHTML = `
    <span>PHONE NUMBER: 09019919182 / </span>
    <span>EMAIL ADDRESS: mostafajamshidi7394@gmail.com</span>
`;
}

function updateLang(isLtr) {
  htmlElem.classList.toggle('en', isLtr)
  localStorage.setItem('lang', isLtr ? 'en' : 'fa');
}

langChangerElem.forEach(element => {
  element.addEventListener('click', function () {
    const isLtr = htmlElem.classList.toggle('en');
    updateLang(isLtr);
    window.location.reload()
  });
})


window.onload = function () {
  updateLang(localStorage.getItem('lang') === 'en');
  if (htmlElem.classList.contains('en')) {
    changeToLtr()
  }
};