import { addToCart } from "./addToCart";
import { QuantityControl } from "./QuantityControl";

const pro_template = document.querySelector('#product-card-template');
const pro_container = document.querySelector('.pro-cards');

export const showProductsContainer = (products) => {
  if (!products) return;

  products.slice(0,6).forEach(element => {
    const { id, image, company, item, Description, stock, price, wholeSale, MRP } = element;

    const productClone = document.importNode(pro_template.content, true);
    productClone.querySelector('#cardID').setAttribute('id',`card${id}`);
    productClone.querySelector('.product-title').textContent = item;
    productClone.querySelector('.product-description').textContent = Description;
    productClone.querySelector('.product-category').textContent = company;
    productClone.querySelector('.product-image img').src = image;
    productClone.querySelector('.info-value').textContent = stock ? 'In Stock' : 'Out of Stock';
    productClone.querySelector('.current-price').textContent = `₹${price}`;
    productClone.querySelector('.original-price').textContent = `₹${MRP}`;

    //discount
    let dis = Math.round(((MRP-price)/MRP)*100,1);
    productClone.querySelector('.discount').textContent = `${dis}% OFF`;

    // quantity control
    
    productClone.querySelector('.quantity-controls').addEventListener('click',(event)=>{
        QuantityControl(event,id,stock);
    });

    //add to cart
    productClone.querySelector('.action-buttons').addEventListener('click',(event)=>{
        addToCart(event,id,stock,price);
    })
    pro_container.append(productClone);

  });
};
