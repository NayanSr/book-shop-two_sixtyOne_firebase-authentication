import "./Orders.css";
import Cart from "../Cart/Cart";
import { useLoaderData, Link } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from "react";
import { deleteShopingCart, removeOneFromDb } from "../../utility/fakedb";

const Orders = () => {
  const props = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [allBooks, orderedBooks] = props;

  const [restBooksAfterRemove, setRestBooksAfterRemove] =
    useState(orderedBooks);

  const handleRemoveItem = (id) => {
    const restBooks = restBooksAfterRemove.filter((pd) => pd.id != id);
    setRestBooksAfterRemove(restBooks);
    removeOneFromDb(id);
  };

  const handleClearCart = () => {
    setRestBooksAfterRemove([]);
    deleteShopingCart();
  };

  let quantity = 0;
  for (const item of orderedBooks) {
    quantity = parseInt(item.quantity) + quantity;
  }

  return (
    <div className="shop-container">
      <div className="order-summary">
        {restBooksAfterRemove.map((book) => (
          <ReviewItem
            key={book.id}
            book={book}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart
          addedBooksInCart={restBooksAfterRemove}
          handleClearCart={handleClearCart}
        >
          <Link style={{ textDecoration: "none" }} to="/checkOut">
            <button className="shop-order-review-button">Check-out</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
