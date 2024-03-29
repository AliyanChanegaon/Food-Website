import { footer, navbar } from "../components/common.js";

let arr = [
  "../img/banenr-img1.jpg",
  "../img/banenr-img2.jpg",
  "../img/banenr-img3.jpg",
];

document.querySelector("#Footer").innerHTML = footer();
document.querySelector("#navBar").innerHTML = navbar();

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
const cartQuantity = document.querySelector("#cart-quantity");
cartQuantity.innerText = cartData.length;

const heroSlider = document.querySelector(".home-top-section");
const prev_button = document.querySelector(".prev-button");
const next_button = document.querySelector(".next-button");

let i = 0;
let intervalId;

function startSlider() {
  intervalId = setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    if ( heroSlider.classList.contains("fade-in")) {
      heroSlider.classList.remove("fade-in");
    }
   
    heroSlider.classList.add("fade-in");
    heroSlider.style.backgroundImage = `url(${arr[i]})`;
   

    console.log(i);
    i++;
  }, 3000);
}

function resetInterval() {
  clearInterval(intervalId);
  startSlider();
}

startSlider();

prev_button.addEventListener("click", function () {
  if (i == 0) {
    i = arr.length - 1;
  } else {
    i--;
  }
  console.log("prev");
  heroSlider.style.backgroundImage = `url(${arr[i]})`;
  heroSlider.classList.add("Fade-in");
  resetInterval();
});

next_button.addEventListener("click", function () {
  if (i == arr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  console.log("nxy");
  heroSlider.style.backgroundImage = `url(${arr[i]})`;
  heroSlider.classList.add("Fade-in");
  resetInterval();
});

