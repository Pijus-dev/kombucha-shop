import React from "react";

import styles from "./cart-icon.module.scss";
import { ReactComponent as ShoppingIcon } from "../../img/shopping.svg";

const CartIcon = () => (
  <div className={styles.cartIcon}>
    <ShoppingIcon className={styles.shoppingIcon} />
    <span className={styles.itemCount}>0</span>
  </div>
);
export default CartIcon;