import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { motion } from "framer-motion";
import MobileNavigation from "../mobileNavigation/MobileNavigation";
import CartIcon from "../cartIcon/CartIcon";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

import styles from "./carousel-navbar.module.scss";

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

const CarouselNavbar = ({ hidden }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [className, setClassName] = useState("");

  const handleScroll = () => {
    if (window.pageYOffset > 60) {
      if (!className) {
        setClassName(styles.scroll);
      }
    } else {
      if (className) {
        setClassName("");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [className]);

  return (
    <div className={className}>
      <motion.div
        className={`${styles.navbarContainer}`}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className={`${showMenu && styles.navbarExpand}`}>
          <nav className={styles.navbar}>
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
              <CartIcon />
              {hidden ? null : <Cart />}
              <div
                className={`${styles.toggler} ${showMenu ? styles.active : ""}`}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className={styles.togglerLine}></span>
                <span className={styles.togglerLine}></span>
                <span className={styles.togglerLine}></span>
              </div>
            </div>
          </nav>
        </div>
        {<MobileNavigation open={showMenu} />}
      </motion.div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(CarouselNavbar);
