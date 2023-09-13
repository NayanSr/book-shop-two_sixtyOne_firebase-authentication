/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const addedBooksInCart = props.addedBooksInCart;
  const handleClearCart = props.handleClearCart;

  let total = 0;
  let totalDeliveryCharge = 0;
  let totalQuantity = 0;
  for (const product of addedBooksInCart) {
    // product.quantity = product.quantity || 1;
    total += parseFloat(product.price * product.quantity);
    totalDeliveryCharge += parseFloat(product.delivery * product.quantity);
    totalQuantity = totalQuantity + parseInt(product.quantity);
  }
  const tax = (total * 0.07).toFixed(2);
  const grandTotal = total + totalDeliveryCharge + parseFloat(tax);

  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Order quantity: {totalQuantity}</p>
      <span>
        <p>Total Price: </p>
        <p>$ {total.toFixed(2)}</p>
      </span>
      <span>
        <p>Total Delivery : </p>
        <p>$ {totalDeliveryCharge.toFixed(2)}</p>
      </span>
      <span>
        <p>Tax: </p>
        <p>$ {tax}</p>
      </span>
      <span id="grand-total">
        <h5>Grand-Total: </h5>
        <h5>$ {grandTotal.toFixed(2)}</h5>
      </span>
      <button className="crear-car-button" onClick={handleClearCart}>
        <span>Clear Cart </span>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      {props.children}
    </div>
  );
};

export default Cart;
