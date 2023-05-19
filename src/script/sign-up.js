import { footer, navbar } from "../components/common.js";


document.querySelector("#Footer").innerHTML = footer();
document.querySelector("#navBar").innerHTML = navbar();

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
const cartQuantity = document.querySelector("#cart-quantity");
cartQuantity.innerText = cartData.length;

