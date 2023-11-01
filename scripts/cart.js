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

    console.log('cart:', cart);

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
