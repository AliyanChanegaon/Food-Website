import { footer, navbar } from "../components/common.js";

let arr = [
  {
    id: 1,
    type: "starters",
    img: "../img/starter1.jpg",
    text: "Panner Tikka",
    category: ["Crispy", "Spicy", "India"],
    price: "80",
  },
  {
    id: 2,
    type: "starters",
    img: "../img/starter2.jpg",
    text: "Malai Kofta",
    category: ["Soft", "Sweet", "India"],
    price: "90",
  },
  {
    id: 3,
    type: "starters",
    img: "../img/starter3.jpg",
    text: "Fish Fry",
    category: ["Fresh", "Spicy", "India"],
    price: "110",
  },
  {
    id: 4,
    type: "mains",
    img: "../img/maincourse1.jpg",
    text: "Butter Chicken",
    category: ["Fresh", "Medium", "India"],
    price: "140",
  },
  {
    id: 5,
    type: "mains",
    img: "../img/maincourse2.jpg",
    text: "Biryani",
    category: ["Fresh", "Spicy", "India"],
    price: "150",
  },
  {
    id: 6,
    type: "mains",
    img: "../img/maincourse3.jpg",
    text: "Palak Paneer",
    category: ["Fresh", "Sweet", "India"],
    price: "120",
  },
  {
    id: 7,
    type: "dessert",
    img: "../img/Dessert1.jpg",
    text: "Ice Cream",
    category: ["Fresh", "Sweet", "India"],
    price: "40",
  },
  {
    id: 8,
    type: "dessert",
    img: "../img/Dessert2.jpg",
    text: "Pastry",
    category: ["Fresh", "Sweet", "India"],
    price: "80",
  },
  {
    id: 9,
    type: "dessert",
    img: "../img/Dessert3.jpg",
    text: "Milk Shake",
    category: ["Fresh", "Sweet", "India"],
    price: "50",
  },
];

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];



document.querySelector("#Footer").innerHTML = footer();
document.querySelector("#navBar").innerHTML = navbar();

let container = document.querySelector(".container");
const allProduct = document.querySelector(".filters >div:nth-child(1)");
const Starters = document.querySelector(".filters >div:nth-child(2)");
const Mains = document.querySelector(".filters >div:nth-child(3)");
const Dessert = document.querySelector(".filters >div:nth-child(4)");
const cartQuantity = document.querySelector("#cart-quantity");

Starters.addEventListener("click", selectRole);
allProduct.addEventListener("click", selectRole);
Mains.addEventListener("click", selectRole);
Dessert.addEventListener("click", selectRole);

function selectRole() {
  filteredRole(this.innerText);
}

function filteredRole(type) {
  type = type.toLowerCase();

  if (type === "all products") {
    return displayData(arr);
  }
  let filterArr = arr.filter(function (el) {
    return el.type == type;
  });

  displayData(filterArr);
}

const displayData = (arr) => {
  container.innerHTML = "";

  arr.forEach((ele, index) => {
    let div_box = document.createElement("div");
    div_box.setAttribute("class", "box fade-in");

    let img = document.createElement("img");
    img.src = ele.img;

    let h1 = document.createElement("h1");
    h1.innerText = `${ele.text}`;

    let main_span = document.createElement("span");
    main_span.innerHTML = `${ele.category[0]} <span>.</span> <span>${ele.category[1]}</span><span>.</span>${ele.category[2]}`;

    let div_price = document.createElement("div");
    div_price.innerHTML = `₹${ele.price}`;

    let button = document.createElement("button");
    button.innerHTML = `<span> <i class="fa-solid fa-cart-shopping ${index}" style="color: #1b1b1b;"></i></span>`;
    button.setAttribute("class", "buy-hover");
    button.setAttribute("id", `button-${index}`);
    button.addEventListener("click", function () {
      addToCart(ele, index);
    });

    container.append(div_box);
    div_box.append(img, h1, main_span, div_price, button);
  });
};

function addToCart(ele, index) {
  var span = document.querySelector(`#button-${index} >span >i`);
  span.parentNode.removeChild(span);
  document.querySelector(
    `#button-${index} >span`
  ).innerHTML += `<i class="fa-solid fa-check" style="color: #1b1b1b;"></i>`;
  console.log(document.querySelector(`#button-${index} >span >i`));
  console.log(index);
  ele.quantity = 1;

  document.querySelector(`#button-${index}`).style.backgroundColor =
    "rgb(148,218,106)";

  if (cartData.indexOf(ele) != -1) {
    alert("Already added");

    return;
  }

  alert("Added To Cart");

  cartData.push(ele);
  localStorage.setItem("cartData", JSON.stringify(cartData));
  cartQuantity.innerText = cartData.length;
}

cartQuantity.innerText = cartData.length;
displayData(arr);
