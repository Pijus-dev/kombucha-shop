import React from "react";

import { Link } from "react-router-dom";
import styles from "./about-section.module.scss";

const AboutSection = () => (
  <div className={styles.aboutSection}>
    <div className={styles.titleSection}>
      <div className={styles.title} data-aos="fade-up" data-aos-duration="1500">
        <h2>WELCOME TO KOMBUCHA</h2>
        <p>[ KAWM-BOO-CHAH, KUH M-BOO-CHUCH ]</p>
        <div className={styles.titleInformation}>
          <p>
            An effervescent drink, made to a secret, ancient formula, for those
            in the know, which contains a host of beneficial bacteria, yeasts
            and acids imparted to it by its mother culture, the SCOBY
          </p>
        </div>
      </div>
    </div>
    <div className={styles.story}>
      <div style={{ overflow: "hidden" }}>
        <div
          className={styles.aboutImage}
          data-aos="fade-right"
          data-aos-duration="1500"
        ></div>
      </div>
      <div
        className={styles.storyInformation}
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div>
          <h3>OUR STORY</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            explicabo autem voluptatum et, impedit dolor assumenda laboriosam,
            culpa alias optio suscipit nam, odit perferendis earum unde quam
            dolorum corrupti! Quos asperiores blanditiis quas. Accusantium...
          </p>
          <Link to="/about">
            <button>READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.process} data-aos="fade-up" data-aos-duration="1500">
      <h2>OUR PROCESS</h2>
      <div className={styles.line}></div>
      <div className={styles.processImage}></div>
    </div>
  </div>
);
export default AboutSection;
