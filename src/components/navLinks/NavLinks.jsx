import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CartIcon from "../cartIcon/CartIcon";
import Cart from "../cart/Cart";

import styles from "./navlinks.module.scss";

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
const NavLinks = ({ hidden, setShowMenu, showMenu }) => {
  return (
    <div className={styles.links}>
      <motion.div variants={textMotion} whileHover="hover">
        <Link to="/">Home</Link>
      </motion.div>
      <motion.div variants={textMotion} whileHover="hover">
        <Link to="/shop">Shop Now</Link>
      </motion.div>
      <motion.div variants={textMotion} whileHover="hover">
        <Link to="/about">Our Story</Link>
      </motion.div>
      <motion.div variants={textMotion} whileHover="hover">
        <Link to="/locations">Where to buy</Link>
      </motion.div>
      <CartIcon />
      {hidden ? null : <Cart />}
      <div
        className={`${styles.toggler} ${showMenu && styles.active}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className={styles.togglerLine}></span>
        <span className={styles.togglerLine}></span>
        <span className={styles.togglerLine}></span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(NavLinks);
