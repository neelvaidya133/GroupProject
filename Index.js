//  Destinations Array of Objects
const Destinations = [
  {
    id: 1,
    name: "London",
    img: "./Assets/london.jpg",
    price: "$ 1100",
    rating: "4",
    desc: "London is an island and province of Indonesia. The province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan. It is located at the westernmost end of the Lesser Sunda Islands, with Java to the west and Lombok to the east. Its capital, Denpasar, is located in the southern part of the island.",
  },
  {
    id: 2,
    name: "Paris",
    img: "./Assets/paris.jpg",
    price: "$ 1200",
    rating: "5",
    desc: "Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and arts.",
  },
  {
    id: 3,
    name: "Toronto",
    img: "./Assets/toronto.jpg",
    price: "$ 1500",
    rating: "4",
    desc: "Toronto is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea. London has been a major settlement for two millennia. Londinium was founded by the Romans.",
  },
  {
    id: 4,
    name: "India",
    img: "./Assets/India.jpg",
    price: "$ 1000",
    rating: "5",
    desc: "India, often called simply New York, is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States.",
  },
  {
    id: 1,
    name: "London",
    img: "./Assets/london.jpg",
    price: "$ 1100",
    rating: "4",
    desc: "London is an island and province of Indonesia. The province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan. It is located at the westernmost end of the Lesser Sunda Islands, with Java to the west and Lombok to the east. Its capital, Denpasar, is located in the southern part of the island.",
  },
  {
    id: 2,
    name: "Paris",
    img: "./Assets/paris.jpg",
    price: "$ 1200",
    rating: "5",
    desc: "Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and arts.",
  },
  {
    id: 3,
    name: "Toronto",
    img: "./Assets/toronto.jpg",
    price: "$ 1500",
    rating: "4",
    desc: "Toronto is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea. London has been a major settlement for two millennia. Londinium was founded by the Romans.",
  },
  {
    id: 4,
    name: "India",
    img: "./Assets/India.jpg",
    price: "$ 1000",
    rating: "5",
    desc: "India, often called simply New York, is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States.",
  },
];

//  Get Random Destinations
var getDestinations = (a) => {
  console.log(a);
  const randomIndex = Math.floor(Math.random() * a.length);
  return a[randomIndex];
};

const randomDestination = getDestinations(Destinations);

// Typing Effect
const textElement = document.querySelector(".typing");
const text =
  "Your Next Destination Could Be" + " " + randomDestination.name + " " + "!";
let index = 0;

let animationFinished = false;

function type() {
  textElement.textContent = text.slice(0, textElement.textContent.length + 1);

  if (textElement.textContent === text) {
    animationFinished = true;
  }

  if (!animationFinished) {
    setTimeout(type, 100);
  }
}

// Remove animation class after animation has played for Typing Effect

window.addEventListener("DOMContentLoaded", function () {
  type();
  // Rating Generator
  const rating = (a) => {
    let out = ``;
    for (let i = 0; i < a; i++) {
      out += `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fcd635"></stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg>

      `;
    }
    return out;
  };

  // Destination Card Generator
  var card = document.querySelector("#cardid");
  card.innerHTML = ``;
  for (d of Destinations) {
    let out = `
    <div class="DestinationCardWrapper">
    <div class="DestinationCard">
      <img src="${d.img}" alt="${d.name}" />
      <h3>${d.name}</h3>
      <p class="rating">

      ${rating(d.rating)}
      </p>
      <p>
        ${d.price} / Person
      </p>
    </div>
  </div>
    `;
    card.innerHTML += out;
  }
});

// Navbar Scroll Effect
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

// Slick Slider plugin Jquery

$(document).ready(function () {
  $(".your-class").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
  });
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
});

var swiper = new Swiper(".destination-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  loop: true,
});

$(function () {
  $("#tabs").tabs();
});

$(function () {
  $("#accordion").accordion();
});

lightGallery(document.getElementById("animated-thumbnails-gallery"), {
  thumbnail: true,
});
