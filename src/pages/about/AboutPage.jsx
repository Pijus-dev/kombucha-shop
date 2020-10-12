import React from "react";

import CustomButton from "../../components/customButton/CustomButton";
import { Link } from "react-router-dom";

import styles from "./about.module.scss";

const AboutPage = () => (
  <div className={styles.about}>
    <h2> OUR STORY</h2>
    <div className={styles.aboutText}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur
        id sequi nam cumque, hic recusandae perferendis architecto magnam ex
        dolorum ipsum cum eaque deleniti, dolores omnis, accusantium voluptate
        placeat.
      </p>
    </div>
    <div className={styles.aboutImage}></div>
    <div className={styles.aboutText}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        dolor eum facilis libero quia pariatur laudantium rerum sed autem sint?
        Ea consequatur asperiores similique vel corporis. Deserunt reiciendis
        <p>
          beatae sequi pariatur saepe corporis doloribus esse repudiandae
          suscipit ea ullam aliquam fugit libero deleniti, perferendis voluptate
          quam quidem assumenda cupiditate aperiam, rem ipsam necessitatibus!
          Velit, deserunt eveniet excepturi vero minus repudiandae?
        </p>
      </p>
    </div>
    <Link to="/shop">
      <CustomButton>SHOP NOW</CustomButton>
    </Link>
  </div>
);
export default AboutPage;
