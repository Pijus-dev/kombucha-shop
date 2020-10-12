import React, { useEffect, useState } from "react";

import Drink from "../drink/Drink";
import { getDrinks } from "../../firebase/firebase";

import styles from "./cards.module.scss";

const Cards = () => {
  const [product, setProducts] = useState([]);
  const getData = async () => {
    const data = await getDrinks();
    setProducts(data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div className={styles.cards}>
      <h2>Our Products</h2>
      <div className={styles.cardGrid}>
        {/* {JSON.parse(localStorage.getItem("cards")).map((item, idx) => (
          <Drink item={item} key={idx} />
        ))} */}
        {product.map((item, idx) => (
          <Drink item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default Cards;
