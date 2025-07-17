import { getCartProduct } from "./getCartProduct";
import { showProductsContainer } from "./homeCards";
import { updateCartValue } from "./updateCartValue";
import products from "../public/products.json"
import { showToast } from "./showToast";

let valLocalStorage = getCartProduct();
updateCartValue(valLocalStorage);

showProductsContainer(products,1);

