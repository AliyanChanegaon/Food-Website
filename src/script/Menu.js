import { footer, navbar } from "../components/common.js";

document.querySelector("#Footer").innerHTML = footer();

document.querySelector("#navBar").innerHTML = navbar();

let arr = [
  {
    img: "../img/starter1.jpg",
    text: "Panner Tikka",
    category:["Crispy","Spicy","India"],
    price:"80",
    
  },
  {
    img: "../img/starter2.jpg",
    text: "Malai Kofta",
    category:["Soft","Sweet","India"],
    price:"90",
    
  },
  {
    img: "../img/starter3.jpg",
    text: "Fish Fry",
    category:["Fresh","Spicy","India"],
    price:"110",
    
  },
  {
    img: "../img/maincourse1.jpg",
    text: "Butter Chicken",
    category:["Fresh","Medium","India"],
    price:"140",
    
  },
  {
    img: "../img/maincourse2.jpg",
    text: "Biryani",
    category:["Fresh","Spicy","India"],
    price:"150",
    
  },
  {
    img: "../img/maincourse3.jpg",
    text: "Palak Paneer",
    category:["Fresh","Sweet","India"],
    price:"120",
    
  },
  {
    img: "../img/Dessert1.jpg",
    text: "Ice Cream",
    category:["Fresh","Sweet","India"],
    price:"40",
    
  },
  {
    img: "../img/Dessert2.jpg",
    text: "Pastry",
    category:["Fresh","Sweet","India"],
    price:"80",
    
  },
  {
    img: "../img/Dessert3.jpg",
    text: "Milk Shake",
    category:["Fresh","Sweet","India"],
    price:"50",
    
  },
];
