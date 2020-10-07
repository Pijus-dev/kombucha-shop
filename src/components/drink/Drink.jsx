import React from "react";

import styles from "./drink.module.scss";
import { motion } from "framer-motion";

const Drink = (props) => {
  const { name, price, imgUrl } = props;
  return (
    <div className={styles.drink} data-aos="flip-left" data-aos-duration="1200">
      <div
        className={styles.drinkImage}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <button className={styles.addToCart}>Add To Cart</button>
      </div>

      <div className={styles.drinkInfo}>
        <h3>{name}</h3>
        <div className={styles.price}>
          <p>15pack</p>
          <p>{price}&euro;</p>
        </div>
      </div>
    </div>
  );
};
export default Drink;
