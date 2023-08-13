$(document).ready(function () {
  $(".slider").bxSlider({
    pager: false,
    minSlides: 1,
    controls: false,
    auto: true,
    pause: 5000,
    speed: 1000,
    touchEnabled: false,
  });
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  const main = document.getElementById("main");
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "#000";
    nav.style.transition = "0.5s";
    nav.style.boxShadow = "0 0 10px #000";
    main.style.opacity = "1";
  }
  if (window.scrollY === 0) {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
});
