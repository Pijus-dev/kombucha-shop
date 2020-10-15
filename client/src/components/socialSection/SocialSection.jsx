import React from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import CustomButton from "../customButton/CustomButton";

import styles from "./social.module.scss";

const images = [
  require("../../img/ig-1.jpg"),
  require("../../img/ig.jpg"),
  require("../../img/ig-2.jpg"),
  require("../../img/ig-3.jpg"),
  require("../../img/ig-4.jpg"),
  require("../../img/ig-5.jpg"),
  require("../../img/ig-9.jpg"),
  require("../../img/ig-6.jpg"),
  require("../../img/ig-8.jpg"),
];

const SocialSection = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <span>Join our journey</span>
        <a
          href="https://www.instagram.com/kkombucia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @kkombucia
        </a>
      </div>
      <div className={styles.photos}>
        {images.map((img, idx) => (
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${img})` }}
            key={idx}
          >
            <a
              href="https://www.instagram.com/kkombucia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <AiOutlineInstagram size={25} />
              </span>
            </a>
          </div>
        ))}
      </div>
      <div className={styles.followButton}>
        <a
          href="https://www.instagram.com/kkombucia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton>FOLLOW US</CustomButton>
        </a>
      </div>
    </div>
  );
};
export default SocialSection;
