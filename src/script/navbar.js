
// Get the navbar element
// let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
// const cartQuantity = document.querySelector("#cart-quantity");
// cartQuantity.innerText = cartData.length;


const navbar = document.querySelector(".navbar");


// Listen for the scroll event on the window
window.addEventListener("scroll", function () {
  // Check if the user has scrolled down at least 50 pixels
  if (window.scrollY >= 50) {
    // Add the "navbar-scrolled" class to the navbar
    navbar.classList.add("sticky");
    document.querySelector("#Logo").src = "../img/logo-dark.png";
  } else {
    // Remove the "navbar-scrolled" class from the navbar
    navbar.classList.remove("sticky");
    document.querySelector("#Logo").src = "../img/logo.png";
  }
});

setTimeout(()=>{
  const Hamburger = document.querySelector("#hamberger");
const Cross = document.querySelector("#Cross");
const navPages=document.querySelector(".navPages");

if (Hamburger) {
  Hamburger.addEventListener("click", () => {
    console.log("hamberger");
    Cross.style.display = "initial";
    Hamburger.style.display = "none";
    navPages.classList.add("active");
    const activee=document.querySelector(".active");
    // activee.classList.remove("navPages");
  });
}

if (Cross) {
  Cross.addEventListener("click", () => {
    console.log("Cross");
    Cross.style.display = "none";
    Hamburger.style.display = "initial";

    navPages.classList.remove("active");
    //  navPages.classList.add("navPages");
  });
}

},500)