import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShopping,
  RiInformationLine,
  RiContactsFill,
  FaHandshake,
  FiMapPin,
} from "react-icons/all";
import styles from "./mobile-navigation.module.scss";

const containerVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: 500,
    transition: {
      duration: 1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: -500,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const MobileNavigation = ({ open }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="visible"
        exit="exit"
        className={styles.mobileNavigation}
      >
        <motion.div variants={itemVariants} className={styles.links}>
          <div className={styles.link}>
            <AiOutlineHome className={styles.icon} />
            <Link to="/">Home</Link>
          </div>
          <div className={styles.link}>
            <AiOutlineShopping className={styles.icon} />
            <Link to="/shop">Shop</Link>
          </div>
          <div className={styles.link}>
            <RiInformationLine className={styles.icon} />
            <Link to="/about">About</Link>
          </div>
          <div className={styles.link}>
            <RiContactsFill className={styles.icon} />
            <Link to="/contacts">Contacts</Link>
          </div>
          <div className={styles.link}>
            <FaHandshake className={styles.icon} />
            <Link to="/become-reseller">Become reseller</Link>
          </div>
          <div className={styles.link}>
            <FiMapPin className={styles.icon} />
            <Link to="/locations">Where to buy?</Link>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
export default MobileNavigation;
