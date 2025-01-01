/*============  typing animation ================ */
var typed = new Typed(".typing", {
  strings: [
    "",
    "Back End web Developer",
    "Asp.Net Developer",
    "Make High Performance WebSite",
    "DevOps",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const navToggler = document.querySelector(".nav-toggler");
navToggler.onclick = () => {
  const side = document.querySelector(".side");
  side.classList.toggle("side-active");
};

TweenMax.to(".first", 1.6, {
  delay: 1,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".second", 1.6, {
  delay: 1.5,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".third", 1.6, {
  delay: 2,
  left: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.from(".content", 1.5, {
  opacity: 0,
  delay: 3.4,
  x: 100,
  ease: Expo.easeInOut,
});

TweenMax.from(".side", 1.5, {
  opacity: 0,
  delay: 3.7,
  x: -100,
  ease: Expo.easeInOut,
});

window.addEventListener("load", function () {
  AOS.init({
    once: true,
  });
});

// /*============   Aside ================ */
// const nav = document.querySelector(".nav"),
//   navList = nav.querySelectorAll("li"),
//   totalNavList = navList.length,
//   allsection = document.querySelectorAll(".section"),
//   totalSection = allsection.length;

// for (let i = 0; i < totalNavList; i++) {
//   const a = navList[i].querySelector("a");
//   console.log(a);
//   a.addEventListener("click", function () {
//     removebacksection();
//     for (let i = 0; i < totalSection; i++) {
//       allsection[i].classList.remove("back-section");
//     }
//     for (let j = 0; j < totalNavList; i++) {
//       if (navList[j].querySelector("a").classList.contains("active")) {
//         addBacksection(j);
//         // allsection[j].classList.add("back-section");
//       }

//       navList[j].querySelector("a").classList.remove("active");
//     }
//     a.classList.add("active");
//     showSection(this);
//     if (window.innerWidth < 1200) {
//       asideSectionTogglerBtn();
//     }
//   });
// }
// function removebacksection() {
//   for (let i = 0; i < totalSection; i++) {
//     allsection[i].classList.remove("back-section");
//   }
// }

// function addBacksection(num) {
//   allsection[num].classList.add("back-section");
// }
// function showSection(element) {
//   for (let i = 0; i < totalSection; i++) {
//     allsection[i].classList.remove("active");
//   }
//   const target = element.getAttribute("href").split("#")[1];
//   document.querySelector("#" + target).classList.add("active");
// }
// function updateNav(element) {
//   for (let i = 0; i < totalNavList; i++) {
//     navList[i].querySelector("a").classList.remove("active");
//     const target = element.getAttribute("href").split("#")[1];
//     if (
//       target ===
//       navList[i].querySelector("a").getAttribute("href").split("#")[1]
//     ) {
//       navList[i].querySelector("a").classList.add("active");
//     }
//   }
// }
// document.querySelector(".hire-me").addEventListener("click", function () {
//   const sectionIndex = this.getAttribute("data-section-index");
//   console.log(sectionIndex);
//   showSection(this);
//   updateNav(this);
//   removebacksection();
//   addBacksection(sectionIndex);
// });

// const navToggleBtn = document.querySelector(".nav-toggler"),
//   aside = document.querySelector(".side");
// navToggleBtn.addEventListener("click", () => {
//   asideSectionTogglerBtn();
// });
// function asideSectionTogglerBtn() {
//   aside.classList.toggle("open");
//   navToggleBtn.classList.toggle("open");
//   for (let i = 0; i < totalSection; i++) {
//     allsection[i].classList.toggle("open");
//   }
// }
