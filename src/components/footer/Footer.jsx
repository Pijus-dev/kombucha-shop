import React from "react";

import { motion } from "framer-motion";
import { ReactComponent as Visa } from "../../img/visa.svg";
import { ReactComponent as Master } from "../../img/master.svg";
import { ReactComponent as Paypal } from "../../img/paypal.svg";
import { AiOutlineInstagram, FaFacebook } from "react-icons/all";
import { Link } from "react-router-dom";
import CustomButton from "../customButton/CustomButton";

import styles from "./footer.module.scss";

const aboutTLi = [
  { name: "About Us", link: "/about" },
  { name: "Where to buy?", link: "/locations" },
  { name: "Become reseller", link: "/resell" },
  { name: "Latest News", link: "/news" },
];

const Footer = () => (
  <footer>
    <div className={styles.footerContent}>
      <div>
        <ul className={styles.about}>
          {aboutTLi.map(({ name, link }) => (
            <motion.li
              whileHover={{ scale: 1.2, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={name}
            >
              <Link to={`${link}`}>{name}</Link>
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
          <CustomButton>SIGN ME UP</CustomButton>
        </div>
      </div>
    </div>
    <div className={styles.socialContent}>
      <div className={styles.socialIcons}>
        <div>
          <p>&copy; Captain Kombuchia 2020</p>
        </div>
        <div className={styles.creditCards}>
          <Visa />
          <Master style={{ marginLeft: "10px", marginRight: "10px" }} />
          <Paypal />
        </div>
        <div className={styles.terms}>
          <p>Privacy Policy</p>
          <p>Terms of services</p>
          <p>FAQ</p>
        </div>
        <div className={styles.icons}>
          <a
            href="https://www.instagram.com/kkombucia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={26} style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://www.instagram.com/kkombucia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={26} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
