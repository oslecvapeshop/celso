let cartItems = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItemsElement.innerHTML = "";
    cartTotal = 0;

    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);
        cartTotal += item.price;
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
    
    // Show the cart
    const cartElement = document.getElementById("cart");
    if (cartItems.length > 0) {
        cartElement.style.display = "block";
    } else {
        cartElement.style.display = "none";
    }
}

function checkout() {
  
    alert(`Total Amount: ₱${cartTotal.toFixed(2)}\nThank you for your purchase!`);
    // Reset cart after checkout
    cartItems = [];
    updateCart();

    // Hide the cart
    document.getElementById("cart").style.display = "none";
}