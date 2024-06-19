document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-container');
    const totalElement = document.querySelector('.total');
    const totalPriceElement = document.querySelector('.total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        cartContainer.innerHTML = '';  // Clear current items

        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Keranjang belanja Anda kosong.</p>';
            totalElement.textContent = 'Keranjang (0 item)';
            totalPriceElement.textContent = 'Total: Rp. 0';
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name}</p>
                <p>Rp. ${item.price.toLocaleString('id-ID')}</p>
                <button class="remove-from-cart" data-index="${index}">Hapus</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        totalElement.textContent = `Keranjang (${cart.length} item)`;
        totalPriceElement.textContent = `Total: Rp. ${totalPrice.toLocaleString('id-ID')}`;
    }

    cartContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);  // Remove item from cart
            localStorage.setItem('cart', JSON.stringify(cart));  // Update localStorage
            displayCartItems();  // Refresh cart display
        }
    });

    displayCartItems();  // Initial display
});
