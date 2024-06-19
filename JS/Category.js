document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSummary = document.querySelector('.cart-summary');
    const itemCountElement = document.getElementById('item-count');
    const totalPriceElement = document.getElementById('total-price');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = parseInt(productCard.getAttribute('data-product-price'));

            cart.push({ name: productName, price: productPrice });
            localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage

            updateCartSummary();
        });
    });

    function updateCartSummary() {
        const itemCount = cart.length;
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);

        itemCountElement.textContent = `${itemCount} item`;
        totalPriceElement.textContent = `Perkiraan harga Rp. ${totalPrice.toLocaleString('id-ID')}`;
    }

    updateCartSummary();  // Initialize cart summary on page load
});
