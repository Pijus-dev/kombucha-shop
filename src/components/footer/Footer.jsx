import React from "react";

import { motion } from "framer-motion";

import styles from "./footer.module.scss";

const aboutTLi = [
  "About Us",
  "Where to buy?",
  "Become reseller",
  "Latest News",
];

const Footer = () => (
  <footer>
    <div className={styles.footerContent}>
      <div>
        <ul className={styles.about}>
          {aboutTLi.map((item, idx) => (
            <motion.li
              whileHover={{ scale: 1.2, originX: 0, color: "#488169" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={idx}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <ul className={styles.products}>
          <li>Products:</li>
          <li>Kombucha Classic 333ml</li>
          <li>Kombucha Blueberry 333ml</li>
          <li>Kombucha Raspberry 333ml</li>
          <li>Kombucha Pineapple with Ginger 333ml</li>
        </ul>
      </div>
      <div className={styles.map}>
        <h2>Subscribe Us !!</h2>
        <div>
          <p>
            Get instant updates about our new products and special <br /> promos
          </p>
        </div>
        <div className={styles.subscribe}>
          <input type="text" />
          <label className={styles.formLabel}>Your email address</label>
          <button>SIGN ME UP</button>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
