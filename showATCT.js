import { getCartProduct } from "./getCartProduct"

export const showATCT = () =>{

    let subtotal = document.querySelector('#subtotal')
    let total = document.querySelector('#total')
    let tax = document.querySelector('#tax')
    let  discount = document.querySelector('#discount')

    let cartProduct = getCartProduct();
    let initialValue = 0;

    let totalPrice = cartProduct.reduce((accum,currEle)=>{
        let productPrice = parseInt(currEle.price) || 0;
        return accum + productPrice;
    },initialValue);

    subtotal.textContent = `₹${totalPrice.toFixed(2)}`;
    tax.textContent = `₹${(totalPrice*18/100).toFixed(2)}`;
    discount.textContent = `-₹${(totalPrice*18/100).toFixed(2)}`;
    total.textContent = `₹${(totalPrice+(totalPrice*18/100)-(totalPrice*18/100)).toFixed(2)}`;
}