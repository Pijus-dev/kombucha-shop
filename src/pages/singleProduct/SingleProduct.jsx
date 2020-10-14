import React, { useState, useEffect } from "react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

import CustomButton from "../../components/customButton/CustomButton";

import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase";

import styles from "./single-product.module.scss";

const SingleProduct = ({ addItem }) => {
  const urlParams = useParams();
  const { id } = urlParams;

  const [photos, setPhotos] = useState([]);
  const [data, setData] = useState({});

  const getData = async () => {
    const ref = await firestore.collection("drinks").doc(id).get();
    setPhotos(ref.data().imgUrl);
    setData({
      name: ref.data().name,
      price: ref.data().price,
      imgUrl: ref.data().imgUrl[0],
    });
  };

  useEffect(() => {
    getData();
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
export default connect(null, mapDispatchToProps)(SingleProduct);
