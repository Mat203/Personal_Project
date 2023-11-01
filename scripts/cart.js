var menu = [
    { name: 'Product 1', price: 10, image: 'images/menu-main/bigness_lunch.jpg', category: 'Seasonal' },
    { name: 'Product 2', price: 20, image: 'images/menu-main/business-burger.jpg', category: 'Fruits' },
    { name: 'Product 3', price: 30, image: 'images/menu-main/bigness_lunch.jpg', category: 'Drinks' },
    { name: 'Product 4', price: 15, image: 'images/menu-main/business-burger.jpg', category: 'Snacks' }
];


window.onload = function () {
    cart = JSON.parse(localStorage.getItem('cart')) || {};
    displayCart();
};

function displayCart() {
    var cartList = document.getElementById('cart-items');
    var emptyCartMessage = document.getElementById('empty-cart-message');
    if (!cartList || !emptyCartMessage) {
        console.error('Cart elements not found.');
        return;
    }

    cartList.innerHTML = '';
    emptyCartMessage.style.display = 'none';

    var totalSum = 0;


    for (var name in cart) {
        var item = document.createElement('li');
        item.className = 'main-menu-item';
        item.innerHTML =
            '<div class="main-menu-info">' +
            '<h3 class="main-menu-subtitle">' + name + '</h3>' +
            '<p class="main-menu-text">Quantity: ' + cart[name] + '</p>' +
            '<button onclick="removeFromCart(\'' + name + '\')" class="remove-button">Remove from cart</button>' +
            '</div>';
        cartList.appendChild(item);

        console.log('cartList:', cartList);
        console.log('emptyCartMessage:', emptyCartMessage);
        console.log('1');

        totalSum += cart[name] * getItemPriceByName(name);
    }

    var totalSumElement = document.getElementById('total-sum');
    if (totalSumElement) {
        totalSumElement.textContent = 'Total: $' + totalSum.toFixed(2);
    } else {
        console.error('Total sum element not found.');
    }
}

function getItemPriceByName(name) {
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].name === name) {
            return menu[i].price;
        }
    }
    return 0;
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