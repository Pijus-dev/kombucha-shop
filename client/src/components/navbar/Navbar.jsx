import React, { useState } from "react";

import NavLinks from "../navLinks/NavLinks";
import MobileNavigation from "../mobileNavigation/MobileNavigation";

import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={require("../../img/logo.png")} alt="kombuchia logo" />
          </div>
        </Link>
        <NavLinks setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      {<MobileNavigation open={showMenu} />}
    </div>
  );
};
export default Navbar;
