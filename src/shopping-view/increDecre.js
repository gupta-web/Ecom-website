import { getCartProduct } from "./getCartProduct";
import { showATCT } from "./showATCT";

export const increDecre = (event, id, stock, fallbackPrice) => {
    let cartProduct = getCartProduct();

    const currCardElement = document.querySelector(`#card${id}`);
    const quantityInput = currCardElement.querySelector('.quantity-input');
    const itemTotal = currCardElement.querySelector('.item-total');

    let quantity = 1;
    let unitPrice = fallbackPrice;

    let existingProduct = cartProduct.find((currProduct) => currProduct.id == id);

    if (existingProduct) {
        quantity = existingProduct.quantity || 1;
        unitPrice = existingProduct.price / quantity; // 🔥 fix: calculate unit price
    }

    if (event.target.classList.contains('increase-btn')) {
        if (quantity < stock) {
            quantity += 1;
        }
    }

    if (event.target.classList.contains('decrease-btn')) {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    const totalPrice = unitPrice * quantity;

    quantityInput.textContent = quantity;
    itemTotal.textContent = `₹${totalPrice.toFixed(2)}`;

    const updatedCart = cartProduct.map(product => {
        if (product.id == id) {
            return {
                ...product,
                quantity: quantity,
                price: totalPrice  
            };
        }
        return product;
    });

    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
    showATCT();
};
