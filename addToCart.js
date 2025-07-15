import { getCartProduct } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, stock, price) => {
    let valLocalStorage = getCartProduct();

    const currElement = document.querySelector(`#card${id}`);
    let quantity = parseInt(currElement.querySelector('.qty-value').innerText, 10);
    let p = price * quantity;

    const idStr = String(id);

    const existing = valLocalStorage.find(item => String(item.id) === idStr);
    if (existing) {
        existing.quantity = quantity;
        existing.price = p;
    } else {
        valLocalStorage.push({ id: idStr, quantity, price: p });
    }

    // Save updated cart
    localStorage.setItem("cartProductLS", JSON.stringify(valLocalStorage));


    updateCartValue(valLocalStorage);
    showToast("add",String(id));
};
