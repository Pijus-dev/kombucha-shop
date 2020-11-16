import React, { useState, useEffect } from "react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { withRouter } from "react-router-dom";

import CustomButton from "../../components/customButton/CustomButton";

import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase";

import { DRINKS } from "../../mockData";

import styles from "./single-product.module.scss";
const SingleProduct = ({ match, addItem }) => {
  const [photos, setPhotos] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const drink = DRINKS.find(({ id }) => id === match.params.id);
    const { imgUrl } = drink;
    setPhotos(imgUrl);
    setData({
      id: drink.id,
      name: drink.name,
      price: drink.price,
      imgUrl: imgUrl[0],
      description: drink.description,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.photos}>
        <div className="slide-container">
          <Fade>
            {photos.map((img, idx) => (
              <div
                className={`each-fade ${styles.image}`}
                key={idx}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </Fade>
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.info}>
          <h2>
            {data.name} <br /> 15x33cl
          </h2>
          <h3>&euro;{data.price}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit
            velit possimus molestias, corrupti distinctio libero eveniet atque
            laborum illo, consequatur harum?
          </p>
          <CustomButton onClick={() => addItem(data)}>ADD TO CART</CustomButton>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(SingleProduct));
