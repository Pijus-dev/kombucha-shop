import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cartActions";

import styles from "./checkout-item.module.scss";

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  const { imgUrl, price, name, quantity } = item;

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imgUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.quantityInfo}>
          <div className={styles.arrow} onClick={() => removeItem(item)}>
            -
          </div>
          <span className={styles.value}>{quantity}</span>
          <div className={styles.arrow} onClick={() => addItem(item)}>
            +
          </div>
        </div>
      </span>
      <span className={styles.price}>&euro;{price}</span>
      <div className={styles.removeButton} onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
