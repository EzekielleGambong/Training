const cartItems = document.getElementById("cart-items");
const totalAmount = document.getElementById("total-amount");

let cart = {};

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const productElement = event.target.parentElement;
        const productName = productElement.querySelector(".product-name").textContent;
        const productPrice = Number(productElement.querySelector(".product-price").textContent.replace("Price: $", ""));

        addToCart(productName, productPrice);
        updateCart();
    });
});

function addToCart(name, price) {
    if (cart[name]) {
        cart[name].quantity += 1;
    } else {
        cart[name] = { price, quantity: 1 };
    }
    updateTotal();
}

function updateCart() {
    cartItems.innerHTML = "";
    for (const [name, item] of Object.entries(cart)) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        listItem.innerHTML = `
            <span>${name} (x${item.quantity}) - $${item.price * item.quantity}</span>
            <button class="removeCart btn btn-danger btn-sm" data-name="${name}">Remove</button>
        `;
        cartItems.appendChild(listItem);
    }
    
    document.querySelectorAll(".removeCart").forEach(button => {
        button.addEventListener("click", (event) => {
            const itemName = event.target.getAttribute("data-name");
            removeFromCart(itemName);
            updateCart();
        });
    });
}

function removeFromCart(name) {
    if (cart[name]) {
        delete cart[name];
        updateTotal();
    }
}

function updateTotal() {
    let total = 0;
    for (const item of Object.values(cart)) {
        total += item.price * item.quantity;
    }
    totalAmount.textContent = total.toFixed(2);
}
updateCart();
