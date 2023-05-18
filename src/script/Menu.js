import { footer, navbar } from "../components/common.js";

document.querySelector("#Footer").innerHTML = footer();

document.querySelector("#navBar").innerHTML = navbar();

let container= document.querySelector('.container');
const allProduct=document.querySelector('.filters >div:nth-child(1)');
const Starters=document.querySelector('.filters >div:nth-child(2)');
const Mains=document.querySelector('.filters >div:nth-child(3)');
const Dessert=document.querySelector('.filters >div:nth-child(4)');

let arr = [
  {
    type:"Starters",
    img: "../img/starter1.jpg",
    text: "Panner Tikka",
    category:["Crispy","Spicy","India"],
    price:"80",
    
  },
  {
    type:"Starters",
    img: "../img/starter2.jpg",
    text: "Malai Kofta",
    category:["Soft","Sweet","India"],
    price:"90",
    
  },
  {
    type:"Starters",
    img: "../img/starter3.jpg",
    text: "Fish Fry",
    category:["Fresh","Spicy","India"],
    price:"110",
    
  },
  {
    type:"Mains",
    img: "../img/maincourse1.jpg",
    text: "Butter Chicken",
    category:["Fresh","Medium","India"],
    price:"140",
    
  },
  {
    type:"Mains",
    img: "../img/maincourse2.jpg",
    text: "Biryani",
    category:["Fresh","Spicy","India"],
    price:"150",
    
  },
  {
    type:"Mains",
    img: "../img/maincourse3.jpg",
    text: "Palak Paneer",
    category:["Fresh","Sweet","India"],
    price:"120",
    
  },
  {
    type:"Dessert",
    img: "../img/Dessert1.jpg",
    text: "Ice Cream",
    category:["Fresh","Sweet","India"],
    price:"40",
    
  },
  {
    type:"Dessert",
    img: "../img/Dessert2.jpg",
    text: "Pastry",
    category:["Fresh","Sweet","India"],
    price:"80",
    
  },
  {
    type:"Dessert",
    img: "../img/Dessert3.jpg",
    text: "Milk Shake",
    category:["Fresh","Sweet","India"],
    price:"50",
    
  },
];


Starters.addEventListener("click", filteredRole);




function filteredRole(type) {
 
  let filterArr = arr.filter(function (el) {
    return el.type == type;
  });

  displayData(filterArr);
}

const displayData= ()=>{
    arr.forEach((ele,index)=>{
        container.innerHTML+=
        `<div class="box">
        <img src=${ele.img} alt="">
        <h1>${ele.text}</h1>
        <span>${ele.category[0]} <span>.</span> <span>${ele.category[1]}</span><span>.</span>${ele.category[2]}</span>
        <div>₹${ele.price}</div>
        <!-- <div id="buy-hover">Add to Cart</div> -->
      </div>`;

      

    })
}

displayData();