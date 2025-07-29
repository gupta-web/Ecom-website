import { getCartProduct } from "./getCartProduct";
import { showProductsContainer } from "./homeCards";
import { updateCartValue } from "./updateCartValue";
// import products from "../public/products.json"
import { showToast } from "./showToast";

let valLocalStorage = getCartProduct();
updateCartValue(valLocalStorage);

// fetch('http://localhost:3000/api/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Products data:', data);
//     showProductsContainer(data);
    
//   })
//   .catch(error => console.error('Error:', error));
showProductsContainer(products,1);

