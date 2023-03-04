/*============= toggle Style switcher ============ */
const styleswitcherToggle = document.querySelector(".style-switcher-toggler");
const styleswitcher = document.querySelector(".style-switcher");
styleswitcherToggle.addEventListener("click", () => {
  styleswitcher.classList.toggle("open");
});
// hide  style switcher  on scroll
window.addEventListener("scroll", () => {
  if (styleswitcher.classList.contains("open")) {
    styleswitcher.classList.remove("open");
  }
});
/*================= theme colors ================= */
const alternatestyle = document.querySelectorAll(".alternate-style");
function setActivestyle(color) {
  alternatestyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/*====================== theme light and dark maode =================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-moon");

  dayNight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
