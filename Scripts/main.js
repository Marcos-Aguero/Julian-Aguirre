const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

/* boton de video*/

const btnEl = document.querySelector(".gallery__item--1");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector(".gallery__item--1");

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})


const btnEl2 = document.querySelector(".gallery__item--2");
const closeIconEl2 = document.querySelector(".close-icon2");
const trailerContainerEl2 = document.querySelector("#video2");
const videoEl2 = document.querySelector(".gallery__item2");

btnEl2.addEventListener("click", () => {
    trailerContainerEl2.classList.remove("active");
});

closeIconEl2.addEventListener("click", () => {
    trailerContainerEl2.classList.add("active");
    videoEl2.pause();
    videoEl2.currentTime = 0;
})


const btnEl3 = document.querySelector(".gallery__item--3");
const closeIconEl3 = document.querySelector(".close-icon3");
const trailerContainerEl3 = document.querySelector("#video3");
const videoEl3 = document.querySelector(".gallery__item3");

btnEl3.addEventListener("click", () => {
    trailerContainerEl3.classList.remove("active");
});

closeIconEl3.addEventListener("click", () => {
    trailerContainerEl3.classList.add("active");
    videoEl3.pause();
    videoEl3.currentTime = 0;
})



const btnEl4 = document.querySelector(".gallery__item--4");
const closeIconEl4 = document.querySelector(".close-icon4");
const trailerContainerEl4 = document.querySelector("#video4");
const videoEl4 = document.querySelector(".gallery__item4");

btnEl4.addEventListener("click", () => {
    trailerContainerEl4.classList.remove("active");
});

closeIconEl4.addEventListener("click", () => {
    trailerContainerEl4.classList.add("active");
    videoEl4.pause();
    videoEl4.currentTime = 0;
})



const btnEl5 = document.querySelector(".gallery__item--5");
const closeIconEl5 = document.querySelector(".close-icon5");
const trailerContainerEl5 = document.querySelector("#video5");
const videoEl5 = document.querySelector(".gallery__item5");

btnEl5.addEventListener("click", () => {
    trailerContainerEl5.classList.remove("active");
});

closeIconEl5.addEventListener("click", () => {
    trailerContainerEl5.classList.add("active");
    videoEl5.pause();
    videoEl5.currentTime = 0;
})




const btnEl6 = document.querySelector(".gallery__item--6");
const closeIconEl6 = document.querySelector(".close-icon6");
const trailerContainerEl6 = document.querySelector("#video6");
const videoEl6 = document.querySelector(".gallery__item6");

btnEl6.addEventListener("click", () => {
    trailerContainerEl6.classList.remove("active");
});

closeIconEl6.addEventListener("click", () => {
    trailerContainerEl6.classList.add("active");
    videoEl6.pause();
    videoEl6.currentTime = 0;
})