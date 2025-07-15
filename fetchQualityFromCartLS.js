import { getCartProduct } from "./getCartProduct"

export const fetchQualityFromCartLS = (id,price)=>{
    let localStorageData = getCartProduct()

    let existingProduct = localStorageData.find((currProduct)=> currProduct.id==id)
    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return {quantity,price};
};