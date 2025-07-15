export const showToast = (action, id = "") => {
    let message = "";

    switch (action) {
        case "delete":
            message = `Item with ID ${id} deleted from cart.`;
            break;
        case "add":
            message = `Item with ID ${id} added to cart.`;
            break;
        case "update":
            message = `Item with ID ${id} updated in cart.`;
            break;
        default:
            message = "Action performed.";
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    // Remove toast after animation ends
    setTimeout(() => {
        toast.remove();
    }, 3000);
};
