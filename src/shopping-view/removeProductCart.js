import { getCartProduct } from "./getCartProduct"
import { showATCT } from "./showATCT";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductCart = (id) =>{
    let cartProduct = getCartProduct()

    cartProduct = cartProduct.filter((currProduct)=> currProduct.id !=id);
    localStorage.setItem('cartProductLS',JSON.stringify(cartProduct));

    let removeDiv = document.getElementById(`card${String(id)}`)
    if(removeDiv){
        removeDiv.remove();
        showToast("delete",id)
    }

    showATCT()
    updateCartValue(cartProduct);
}