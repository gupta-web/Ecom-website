import { showHam } from "./hamburger";
import products from "./public/products.json"
import { getCartProduct } from "./getCartProduct";
import { fetchQualityFromCartLS } from "./fetchQualityFromCartLS";
import { removeProductCart } from "./removeProductCart";
import { increDecre } from "./increDecre";
import { showATCT } from "./showATCT";

let getCardProductLS = getCartProduct();
let filterProducts = products.filter((currProduct) => {
    return getCardProductLS.some((currEle) => String(currProduct.id) == String(currEle.id));
});

let productTemplate = document.querySelector('#cart-item-template');
let cartelement = document.querySelector('.cart-items');

const showCartProduct = () => {
    filterProducts.forEach((currProduct) => {
        const { id, image, company, item, Description, stock, price, wholeSale, MRP } = currProduct;

        let productClone = document.importNode(productTemplate.content, true);

        let LsActualdata = fetchQualityFromCartLS(id, price);

        productClone.querySelector('.item-title').textContent = item
        productClone.querySelector('.item-specs').textContent = company
        productClone.querySelector('#cardID').setAttribute('id', `card${id}`);
        productClone.querySelector('.item-price').textContent = `₹${price}`;
        productClone.querySelector('.item-total').textContent = `₹${LsActualdata.price}`
        productClone.querySelector('.item-image').src = image
        productClone.querySelector('.quantity-input').textContent = LsActualdata.quantity;


        productClone.querySelector('.remove-btn').addEventListener('click', () => removeProductCart(id));

        productClone.querySelector('.quantity-controls').addEventListener('click', (event) => {
            increDecre(event, id, stock, price);
        });

        cartelement.appendChild(productClone);
    });
};




showATCT();
showCartProduct();

showHam()
