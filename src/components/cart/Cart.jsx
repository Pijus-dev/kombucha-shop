import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cartSelectors";

import CustomButton from "../customButton/CustomButton";

import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import CartItem from "../cartItem/cartItem";

import styles from "./cart.module.scss";

const Cart = ({ cartItems, dispatch }) => {
  const data = JSON.parse(localStorage.getItem("cartItems"));
  console.log(data);
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <h2>Your Cart Is Empty</h2>
        )}
      </div>
      {cartItems.length > 0 && <CustomButton>GO TO CHECKOUT</CustomButton>}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(withRouter(Cart));
