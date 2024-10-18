const clearCartButton = document.querySelector('.cart__clear-button');
const cartItems = document.querySelector('.cart__items');
const cartTotal = document.querySelector('.cart__total');

const cart = [];
function updateCart() {
    cartItems.textContent = cart.length > 0 
        ? cart.map(item => item.name).join(', ') 
        : 'No hay productos en el carrito.';
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

document.querySelectorAll('.product__button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        cart.push({ name: productName, price: productPrice });

        updateCart();
    });
});
clearCartButton.addEventListener('click', () => {
    cart.length = 0;
    updateCart(); 
});
