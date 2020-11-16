import React, { useState, useEffect } from "react";

import Product from "../../components/product/Product";
import Spinner from "../../components/spinner/Spinner";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import {DRINKS }from "../../mockData";

import { getShopDrinks } from "../../firebase/firebase";

import styles from "./shop.module.scss";

const Shop = () => {
  const [grid, setGrid] = useState(false);
  const [products, setProducts] = useState(DRINKS);

  const changeGrid = () => {
    setGrid(!grid);
  };

  return (
    <>
      <div className={styles.container}>
        {grid ? (
          <BsFillGridFill className={styles.icon} onClick={changeGrid} />
        ) : (
          <BsFillGrid3X3GapFill className={styles.icon} onClick={changeGrid} />
        )}
      </div>
      <div className={grid ? `${styles.smallGrid}` : `${styles.bigGrid}`}>
        {products.map((item, idx) => (
          <Product item={item} key={idx} />
        ))}
      </div>
    </>
  );
};
export default Shop;
