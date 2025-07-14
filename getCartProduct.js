export const getCartProduct = () => {
    let cartProducts = localStorage.getItem("cartProductLS");
    if (!cartProducts) {
        return [];
    }

    return JSON.parse(cartProducts);
};
