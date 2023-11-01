var menu = [
    { name: 'Product 1', price: 10, image: 'images/menu-main/bigness_lunch.jpg', category: 'Seasonal' },
    { name: 'Product 2', price: 20, image: 'images/menu-main/business-burger.jpg', category: 'Fruits' },
    { name: 'Product 3', price: 30, image: 'images/menu-main/bigness_lunch.jpg', category: 'Drinks' },
    { name: 'Product 4', price: 15, image: 'images/menu-main/business-burger.jpg', category: 'Snacks' }
];

var cart = {};

window.onload = function() {
    cart = JSON.parse(localStorage.getItem('cart')) || {};

    var menuList = document.getElementById('menu');
    for (var i = 0; i < menu.length; i++) {
        var item = document.createElement('li');
        item.className = 'main-menu-item';
        item.innerHTML =
            '<div class="main-menu-img">' +
                '<img src="' + menu[i].image + '" class="main-menu-image">' +
            '</div>' +
            '<div class="main-menu-info">' +
                '<h3 class="main-menu-subtitle">' + menu[i].name + '</h3>' +
                '<p class="main-menu-text">$' + menu[i].price + '</p>' +
                '<button onclick="addToCart(\'' + menu[i].name + '\')" class="button" id="menu-button">Add to cart</button>' +
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
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + ' has been added to your cart.');
}

function removeFromCart(name) {
    if (cart[name] > 1) {
        cart[name]--;
    } else {
        delete cart[name];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}


function displayCart() {
    var cartList = document.getElementById('cart').getElementsByTagName('ul')[0];
    cartList.innerHTML = '';

    var totalSum = 0; // Initialize the total sum to zero

    for (var name in cart) {
        var item = document.createElement('li');
        item.className = 'main-menu-item';
        item.innerHTML =
            '<div class="main-menu-info">' +
                '<h3 class="main-menu-subtitle">' + name + '</h3>' +
                '<p class="main-menu-text">Quantity: ' + cart[name] + '</p>' +
                '<button onclick="removeFromCart(\'' + name + '\')">Remove from cart</button>' +
            '</div>';
        cartList.appendChild(item);

        // Calculate the total sum for each item in the cart
        totalSum += cart[name] * getItemPriceByName(name);
    }

    // Display the total sum at the bottom of the cart
    var totalSumElement = document.getElementById('total-sum');
    totalSumElement.textContent = 'Total: $' + totalSum.toFixed(2);
}

function getItemPriceByName(name) {
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].name === name) {
            return menu[i].price;
        }
    }
    return 0;
}


function toggleCart() {
    var cartDiv = document.getElementById('cart');
    var siteOverlay = document.getElementById('site-overlay');
    if (cartDiv.style.display === 'none') {
        displayCart();
        cartDiv.style.display = 'block';
        siteOverlay.style.display = 'block';
        cartDiv.style.position = 'fixed';
        cartDiv.style.right = '0';
        cartDiv.style.top = '0';
        siteOverlay.style.display = 'block';
        setTimeout(() => {
            cartDiv.style.transform = 'translateX(0)';
            cartDiv.style.opacity = 1;
            siteOverlay.style.opacity = 1;
        }, 0);
    } else {
        cartDiv.style.transform = 'translateX(100%)';
        cartDiv.style.opacity = 0;
        siteOverlay.style.opacity = 0;

        setTimeout(() => {
            cartDiv.style.display = 'none';
            siteOverlay.style.display = 'none';
        }, 300); 
    }
}

function checkout() {
    if (Object.keys(cart).length === 0) {
        alert('Your cart is empty!');
        return;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'index2.html';
}
