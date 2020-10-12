import React from "react";

import CustomButton from "../customButton/CustomButton";
import { addItem } from "../../redux/cart/cartActions";
import { connect } from "react-redux";

import styles from "./product.module.scss";

const Product = ({ item, addItem }) => {
  const { name, price, imgUrl, description } = item;
  return (
    <div className={styles.product}>
      <div
        className={styles.productImage}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <CustomButton onClick={() => addItem(item)}>ADD TO CART</CustomButton>
      </div>
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>
          {description} {price}&euro;
        </p>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
