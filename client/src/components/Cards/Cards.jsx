import React, { useEffect, useState } from "react";

import Drink from "../drink/Drink";
import { getDrinks } from "../../firebase/firebase";

import { DRINKS } from "../../mockData";

import styles from "./cards.module.scss";

// card page
const Cards = () => {
  const [product, setProducts] = useState([]);

  const drinks = DRINKS.filter(({ popular }) => popular === true);
  useEffect(() => {
    setProducts(drinks);
  }, []);
  return (
    <div className={styles.cards}>
      <h2>Our Products</h2>
      <div className={styles.cardGrid}>
        {product.map((item, idx) => (
          <Drink item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default Cards;
