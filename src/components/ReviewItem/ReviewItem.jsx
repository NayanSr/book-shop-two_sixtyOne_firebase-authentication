import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReviewItem.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img, title, price, quantity, id } = props.book;
  // eslint-disable-next-line react/prop-types
  const handleRemoveItem = props.handleRemoveItem;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-item-detail">
        <p>{title}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button onClick={() => handleRemoveItem(id)} className="delete-button">
        <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;
