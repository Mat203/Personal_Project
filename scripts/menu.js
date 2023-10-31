var menu = [
    {name: 'Product 1', price: 10, image: 'images/menu-main/bigness_lunch.jpg'},
    {name: 'Product 2', price: 20, image: 'images/menu-main/business-burger.jpg'},
    {name: 'Product 3', price: 30, image: 'images/menu-main/bigness_lunch.jpg'}
];

var cart = {};

window.onload = function() {
    var menuList = document.getElementById('menu');
    for (var i = 0; i < menu.length; i++) {
        var item = document.createElement('li');
        item.className = 'menu-item';
        item.innerHTML =
            '<div class="menu-img">' +
                '<img src="' + menu[i].image + '" class="menu-image">' +
            '</div>' +
            '<div class="menu-info">' +
                '<h3 class="menu-subtitle">' + menu[i].name + '</h3>' +
                '<p class="menu-text">$' + menu[i].price + '</p>' +
                '<button onclick="addToCart(\'' + menu[i].name + '\')">Add to cart</button>' +
            '</div>';
        menuList.appendChild(item);
    }
};

function addToCart(name) {
    if (cart[name]) {
        cart[name]++;
    } else {
        cart[name] = 1;
    }
    alert(name + ' has been added to your cart.');
}

function removeFromCart(name) {
    if (cart[name] > 1) {
        cart[name]--;
    } else {
        delete cart[name];
    }
}

function displayCart() {
    var cartList = document.getElementById('cart').getElementsByTagName('ul')[0];
    cartList.innerHTML = ''; 
    for (var name in cart) {
        var item = document.createElement('li');
        item.className = 'menu-item';
        item.innerHTML =
            '<div class="menu-info">' +
                '<h3 class="menu-subtitle">' + name + '</h3>' +
                '<p class="menu-text">Quantity: ' + cart[name] + '</p>' +
                '<button onclick="removeFromCart(\'' + name + '\')">Remove from cart</button>' +
            '</div>';
        cartList.appendChild(item);
    }
}

function toggleCart() {
    var cartDiv = document.getElementById('cart');
    if (cartDiv.style.display === 'none') {
        displayCart();
        cartDiv.style.display = 'block';
    } else {
        cartDiv.style.display = 'none';
    }
}

function checkout() {
    if (Object.keys(cart).length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Save the cart to local storage so it can be accessed on the checkout page
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirect to the checkout page
    window.location.href = 'checkout.html';
}
