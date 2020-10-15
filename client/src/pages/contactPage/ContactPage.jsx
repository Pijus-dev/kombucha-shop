import React from "react";

import styles from "./contact-page.module.scss";

const ContactPage = () => (
  <div className={styles.container}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.9290036644857!2d21.063890015869493!3d55.915931386866134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e52932693edc3f%3A0xd33dcba56bfdc20a!2sVytauto%20g.%2084%2C%20Palanga%2000132!5e0!3m2!1sen!2slt!4v1602755713307!5m2!1sen!2slt"
      width="600"
      height="450"
      frameBorder="0"
      style={{
        border: "0",
        borderRadius: "6px",
        boxShadow: "0 2px 2px 4px #eee",
      }}
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    <div className={styles.content}>
      <div className={styles.contactInfo}>
        <h2>Contacts</h2>
        <h3>Address</h3>
        <p>Vytauto g. 84, Palanga</p>
        <h3>Email</h3>
        <p>labas@kkombucia.lt</p>
        <h3>Phone</h3>
        <p>860537606</p>
      </div>
    </div>
  </div>
);
export default ContactPage;
