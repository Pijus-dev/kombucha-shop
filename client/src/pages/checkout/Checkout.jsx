import React from "react";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripeButton/StripeButton";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import styles from "./checkout.module.scss";

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutContent}>
        <h3>Your Shopping Bag</h3>
        <hr />
        <div className={styles.checkoutHeader}>
          <div className={styles.headerBlock}>
            <span>Product</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Name</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Quantity</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Price</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Remove</span>
          </div>
        </div>
        <div>
          {cartItems.map((item, idx) => (
            <CheckoutItem item={item} key={idx} />
          ))}
        </div>
        <div className={styles.total}>
          <span>TOTAL: &euro; {totalPrice}</span>
          <div className={styles.checkoutButton}>
            {totalPrice > 0 && <StripeButton price={totalPrice} />}
          </div>
        </div>
      </div>
      <div className={styles.creditCard}>
        <p>For the test case use these credit card numbers:</p>
        <p>4242 4242 4242 4242</p>
        <p>02/23 123</p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
