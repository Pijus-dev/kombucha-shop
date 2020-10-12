import React, { useState, useEffect } from "react";

import Product from "../../components/product/Product";
import Spinner from "../../components/spinner/Spinner";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";

import { getShopDrinks } from "../../firebase/firebase";

import styles from "./shop.module.scss";

const Shop = () => {
  const [grid, setGrid] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeGrid = () => {
    setGrid(!grid);
  };

  const getProducts = async () => {
    const data = await getShopDrinks();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Spinner isLoading={loading} />
      <div className={styles.container}>
        {grid ? (
          <BsFillGridFill className={styles.icon} onClick={changeGrid} />
        ) : (
          <BsFillGrid3X3GapFill className={styles.icon} onClick={changeGrid} />
        )}
      </div>
      <div className={grid ? `${styles.smallGrid}` : `${styles.bigGrid}`}>
        {/* {JSON.parse(localStorage.getItem("cards")).map((item, idx) => (
          <Product item={item} key={idx} />
        ))} */}
        {products.map((item, idx) => (
          <Product item={item} key={idx} />
        ))}
      </div>
    </>
  );
};
export default Shop;
