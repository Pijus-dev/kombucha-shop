import React from "react";

import { motion } from "framer-motion";
import styles from "./carousel-navbar.module.scss";
import { Link } from "react-router-dom";

const CarouselNavbar = () => {
  const textMotion = {
    rest: {
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      className={styles.navbarContainer}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={require("../../img/logo.jpg")} alt="" />
        </div>
        <div className={styles.links}>
          <motion.div variants={textMotion} whileHover="hover">
            <Link>Our Kombucha</Link>
          </motion.div>
          <motion.div variants={textMotion} whileHover="hover">
            <Link>Shop Now</Link>
          </motion.div>
          <motion.div variants={textMotion} whileHover="hover">
            <Link>Our Story</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default CarouselNavbar;
