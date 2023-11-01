describe('addToCart', function() {
    it('should add a product to the cart', function() {
        addToCart('Product 1');
        assert.equal(cart['Product 1'], 1);
    });

    it('should increase the quantity of a product in the cart', function() {
        addToCart('Product 2');
        addToCart('Product 2');
        assert.equal(cart['Product 2'], 2);
    });
});

describe('getItemPriceByName', function() {
    it('should return the price of the item when the name is found', function() {
        assert.equal(getItemPriceByName('Product 1'), 10);
        assert.equal(getItemPriceByName('Product 2'), 20);
    });

    it('should return 0 when the name is not found', function() {
        assert.equal(getItemPriceByName('Nonexistent Product'), 0);
    });
});

