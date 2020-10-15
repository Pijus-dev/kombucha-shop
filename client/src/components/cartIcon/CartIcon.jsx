import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import styles from "./cart-icon.module.scss";
import { ReactComponent as ShoppingIcon } from "../../img/shopping.svg";

const CartIcon = ({ itemCount, dispatch }) => (
  <div className={styles.cartIcon} onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIcon className={styles.shoppingIcon} />
    <span className={styles.itemCount}>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
