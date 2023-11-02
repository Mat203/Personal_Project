var menu = [
    { name: 'BIGness lunch', price: 30, image: 'images/menu-main/bigness_lunch.jpg', category: 'Seasonal' },
    { name: 'Business Burger', price: 10, image: 'images/menu-main/business-burger.jpg', category: 'Fruits' },
    { name: 'Bread Basket', price: 15, image: 'images/menu-main/bread-basket.jpg', category: 'Drinks' },
    { name: 'Vegan Box', price: 30, image: 'images/menu-main/vegan-box.jpg', category: 'Snacks' },
    { name: 'Light Lunch', price: 25, image: 'images/menu-main/light-lunch.jpg', category: 'Snacks' },
    { name: 'Business Pizza', price: 20, image: 'images/menu-main/business-pizza.jpg', category: 'Snacks' }
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
            '</div>';
        cartList.appendChild(item);

        console.log('cartList:', cartList);
        console.log('emptyCartMessage:', emptyCartMessage);
        console.log('1');

        totalSum += cart[name] * getItemPriceByName(name);
    }

    var totalSumElement = document.getElementById('total-sum');
    if (totalSumElement) {
        console.log(totalSum)
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