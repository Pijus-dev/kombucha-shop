import React from "react";

import CustomButton from "../customButton/CustomButton";
import { Link } from "react-router-dom";

import styles from "./product.module.scss";

const Product = ({ item }) => {
  const { name, price, imgUrl, description, id } = item;
  return (
    <div className={styles.product}>
      <Link to={`/product/${id}`}>
        <div
          className={styles.productImage}
          style={{ backgroundImage: `url(${imgUrl[0]})` }}
        >
          <CustomButton>SEE MORE</CustomButton>
        </div>
      </Link>
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>
          {description} {price}&euro;
        </p>
      </div>
    </div>
  );
};

export default  Product;
