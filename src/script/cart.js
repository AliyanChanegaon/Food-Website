import { footer } from "../components/common.js";

// Add Items to cart Functionality
var cartItemContainer = []

var cartData = JSON.parse(localStorage.getItem("cartData"));

// Check if cartData exists and is an array
if (Array.isArray(cartData)) {
  // Add each object from cartData to cartItemContainer
  cartData.forEach(function(item) {
    cartItemContainer.push(item);
  });
}

var mainContainer = document.getElementById("cart_left-container");
// Loop through the cartItemContainer array
for (var i = 0; i < cartItemContainer.length; i++) {
    var item = cartItemContainer[i];

    // Create a new article element
    var article = document.createElement("article");
    article.className = "cart_item";

    // Create the HTML structure inside the article element
    article.innerHTML = `
        <div class="cart_item-image">
            <img src="${item.img}" alt="">
        </div>
        <div class="cart_item-details">
            <h4>${item.type}</h4>
            <p>${item.text}</p>
            <p>${item.category.map(cat => {
                return document.createElement("p").innerHTML=cat
            })}</p>
        </div>
        <div class="cart_item-quantity">
            <button class="cart_quantity-btn minus">-</button>
            <input type="text" value="1" readonly class="item-quantity">
            <button class="cart_quantity-btn plus">+</button>
        </div>
        <div class="cart_item-price">
            <h4 class="item-price">$ ${item.price.toFixed(2)}</h4>
        </div>
        <div class="cart_item-remove">
            <button class="cart_delete-btn"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </div>
    `;

    // Append the article element to the container
    mainContainer.append(article);
}


// Cart item remove Functionality
var removeCartItems = document.getElementsByClassName('cart_delete-btn');

for (var i = 0; i < removeCartItems.length; i++) {
    var button = removeCartItems[i];
    button.addEventListener('click', (e) => {
    var buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
        updateItemsCount();
        cartTotal()
    });
}

function calculateItemsCount() {
    let totalCount = 0;
    const quantityInputs = document.querySelectorAll('.item-quantity');
    quantityInputs.forEach(input => {
      totalCount += parseInt(input.value);
    });
    const itemsCountElement = document.querySelector('.items-count');
    itemsCountElement.textContent = `Items: ${totalCount}`;
}

    // Function to update the items count element
function updateItemsCount() {
    const totalCount = document.querySelectorAll('.cart_item').length;
    const itemsCountElement = document.querySelector('.items-count');
    itemsCount = totalCount; // Update the itemsCount variable
    itemsCountElement.textContent = `Items: ${itemsCount}`;
}
      

// Initial update of items count
updateItemsCount();

let cartTotal = () => {
    var cartItems = document.getElementsByClassName('cart_left-items')[0]
    var cartitem = cartItems.getElementsByClassName('cart_item')
    const emptyCartImage = document.getElementById('emptyCartImage');
    const cartSection = document.getElementsByClassName('cart_section')[0]
    var total = 0
    for (var i = 0; i < cartitem.length; i++) {
        var item = cartitem[i]
        var priceEl = item.getElementsByClassName('item-price')[0]
        var quantityEl = item.getElementsByClassName('item-quantity')[0]
        
        var price = parseFloat(priceEl.innerText.replace('$', ''))
        var quantity =  quantityEl.value
        total += (price * quantity);

    }

    if (cartitem.length === 0) {
        emptyCartImage.style.display = 'grid';
        cartSection.style.display = 'none'
      } else {
        emptyCartImage.style.display = 'none';
    }

    document.getElementsByClassName('cart_total-price')[0].innerText = `$ ${total}`
    localStorage.setItem("finalprice", total)
}

cartTotal()

    //Quantity Plus and Minus Functionality 
const plusButtons = document.querySelectorAll('.cart_quantity-btn.plus');
const minusButtons = document.querySelectorAll('.cart_quantity-btn.minus');
var itemsCount = document.getElementsByClassName('item-quantity').length


plusButtons.forEach(button => {
    button.addEventListener('click', () => {
      const quantityInput = button.parentElement.querySelector('.item-quantity');
      const previousQuantity = parseInt(quantityInput.value);
      quantityInput.value = previousQuantity + 1;
      cartTotal();
      calculateItemsCount();
    });
});
  
minusButtons.forEach(button => {
    button.addEventListener('click', () => {
      const quantityInput = button.parentElement.querySelector('.item-quantity');
      const previousQuantity = parseInt(quantityInput.value);
      if (previousQuantity > 1) {
        quantityInput.value = previousQuantity - 1;
        cartTotal();
        calculateItemsCount();
      }
    });
});


document.querySelector("#Footer").innerHTML =  footer();