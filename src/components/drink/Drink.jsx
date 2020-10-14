import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { Link } from "react-router-dom";

import styles from "./drink.module.scss";

const Drink = ({ item, addItemToCart }) => {
  const { name, price, imgUrl, description, id } = item;
  return (
    <div className={styles.drink}>
      <Link to={`/product/${id}`}>
        <div
          className={styles.drinkImage}
          style={{ backgroundImage: `url(${imgUrl[0]})` }}
        >
          <button className={styles.addToCart}>CHECK MORE</button>
        </div>
      </Link>

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
