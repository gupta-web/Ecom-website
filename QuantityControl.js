export const QuantityControl = (event, id, stock) => {
  const cardElement = document.querySelector(`#card${id}`);
  if (!cardElement) return;

  const quantityElement = cardElement.querySelector('#quantity');
  if (!quantityElement) return;

  let quantity = parseInt(quantityElement.getAttribute('data-quantity')) || 1;

  if (event.target.classList.contains('incre')) {
    if (quantity < stock) {
      quantity += 1;
    }
  }

  if (event.target.classList.contains('decre')) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  quantityElement.innerText = quantity;
  quantityElement.setAttribute('data-quantity', quantity);

  return quantity;
};
