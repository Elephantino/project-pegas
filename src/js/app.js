import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();





import Swiper from 'swiper/bundle';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';



const swiper = new Swiper(".swiper", {

  modules: [Navigation, Pagination, Scrollbar],
  speed: 300,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,

    // type: 'progressbar'
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 50,
  grabCursor: true,

  slideToClickedSlide: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  mousewheel: {
    invert: true,
    // eventsTarget: '.swiper',
    sensitivity: 1,
    invert: false,
  },

  slidesPerView: 3,

  slidesPerGroup: 1,

  spaceBetween: 40,

  // centeredSlides: true,

  initialSlide: 0,

  // loop: true,

  freeMode: true,

  // autoplay: {
  //   delay: 5000,
  //   stopOnSlide: false,
  //   disableOnInteraction: false,
  // },

  speed: 300,

  // direction: 'vertical',

  // effect: 'fade',


  // fadeEffect: {
  //   crossFade: true
  // },


  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },



});










// grid 


let autoFill = document.querySelector('.auto-fill');
let autoFit = document.querySelector('.auto-fit');
let autoFlex = document.querySelector('.adaptive-flex');

if (autoFill) {
  flsFunctions.gridAnimations(autoFill);
}

if (autoFit) {
  flsFunctions.gridAnimations(autoFit);
}

if (autoFlex) {
  flsFunctions.gridAnimations(autoFlex);
}





// media

// import { findVideos } from "./modules/functions.js";

flsFunctions.findVideos();










// content-switcher


const tabItems = Array.from(document.querySelectorAll('.tab-item'));
const contentItems = Array.from(document.querySelectorAll('.content-item'));
//  Array.from что бы работал .find

const clearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${className}`))
}
const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {

    if (item.classList.contains('is-active')) return

    clearActiveClass(tabItems)
    clearActiveClass(contentItems)

    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)

  })
}

tabItems.forEach(checkoutTabs);





