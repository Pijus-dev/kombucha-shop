import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

import styles from "./drink.module.scss";

const Drink = ({ item, addItemToCart }) => {
  const { name, price, imgUrl, description } = item;
  return (
    <div className={styles.drink}>
      <div
        className={styles.drinkImage}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <button
          className={styles.addToCart}
          onClick={() => addItemToCart(item)}
        >
          Add To Cart
        </button>
      </div>

      <div className={styles.drinkInfo}>
        <h3>{name}</h3>
        <div className={styles.price}>
          <p>{description}</p>
          <p>{price}&euro;</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Drink);
