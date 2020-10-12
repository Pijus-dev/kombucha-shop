import React from "react";

import NavLinks from "../navLinks/NavLinks";

import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={require("../../img/logo.jpg")} alt="kombuchia logo" />
          </div>
        </Link>
        <NavLinks />
      </div>
    </div>
  );
};
export default Navbar;
