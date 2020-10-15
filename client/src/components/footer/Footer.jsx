import React, { useState } from "react";

import { motion } from "framer-motion";
import swal from "sweetalert";
import { ReactComponent as Visa } from "../../img/visa.svg";
import { ReactComponent as Master } from "../../img/master.svg";
import { ReactComponent as Paypal } from "../../img/paypal.svg";
import { AiOutlineInstagram, FaFacebook } from "react-icons/all";
import { Link } from "react-router-dom";
import FormInput from "../formInput/FormInput";
import { firestore } from "../../firebase/firebase";
import CustomButton from "../customButton/CustomButton";

import styles from "./footer.module.scss";

const aboutTLi = [
  { name: "About Us", link: "/about" },
  { name: "Where to buy?", link: "/locations" },
  { name: "Become reseller", link: "/become-reseller" },
  { name: "Contacts", link: "/contacts" },
];

const products = [
  { name: "Kombucha Classic 33cl", id: "0n7JihVoS8FJcJPshNuY" },
  { name: "Kombucha Blueberry 33cl", id: "yiVj8dW8crfMjTp4L6GY" },
  { name: "Kombucha Pineapple with Ginger 33cl", id: "PNPPpUk1Up1053ipUS9r" },
  { name: "Captain Mix 35x33cl", id: "wkFakNkUwQREV1Fo4W9a" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const emails = {
      email,
    };
    try {
      if (email === "") {
        swal("", "you need to type your email", "info");
      } else {
        await firestore.collection("emails").add(emails);
        swal("Well done!!", "you have successfully subscribed us!", "success");
        setEmail("");
        window.scroll({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
            {products.map(({ name, id }) => (
              <li key={id}>
                <Link to={`/product/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.map}>
          <h2>Subscribe Us !!</h2>
          <div>
            <p>
              Get instant updates about our new products and special <br />{" "}
              promos
            </p>
          </div>
          <div className={styles.subscribe}>
            <div className={styles.group}>
              <FormInput
                type="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
                required
                label="enter your email"
              />
            </div>
            <CustomButton onClick={handleSubmit}>SIGN ME UP</CustomButton>
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
};
export default Footer;
