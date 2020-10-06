import React from "react";

import styles from "./drink.module.scss";

const Drink = (props) => {
  const { name, price, imgUrl } = props;
  return (
    <div className={styles.drink} data-aos="flip-left" data-aos-duration="1000">
      <div
        className={styles.drinkImage}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div>
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
