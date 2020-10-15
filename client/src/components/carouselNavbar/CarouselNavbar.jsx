import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import MobileNavigation from "../mobileNavigation/MobileNavigation";
import NavLinks from "../navLinks/NavLinks";

import styles from "./carousel-navbar.module.scss";

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
            <NavLinks setShowMenu={setShowMenu} showMenu={showMenu} />
          </nav>
        </div>
        {<MobileNavigation open={showMenu} />}
      </motion.div>
    </div>
  );
};

export default CarouselNavbar;
