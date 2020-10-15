import React from "react";

import styles from "./spinner.module.scss";

const Spinner = ({ isLoading }) =>
  isLoading ? (
    <div className={styles.overlay}>
      <div className={styles.spinnerContainer}></div>
    </div>
  ) : null;
export default Spinner;
