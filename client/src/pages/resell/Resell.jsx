import React, { useState } from "react";

import { motion } from "framer-motion";
import FormInput from "../../components/formInput/FormInput";
import { firestore } from "../../firebase/firebase";
import swal from "sweetalert";
import CustomButton from "../../components/customButton/CustomButton";
import { useForm } from "react-hook-form";

import styles from "./resell.module.scss";

const Resell = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
  });
  const { name, email, message } = userData;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const onSubmit = async (data) => {
    try {
      await firestore.collection("messages").add(data);
      swal("Done", "we will get in touch soon", "success");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className={styles.image}></div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 110 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 1.5 }}
      >
        <h2>Become a reseller</h2>
        <div className={styles.submition}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.group}>
              <FormInput
                type="text"
                label="Your name"
                name="name"
                value={name}
                register={register({
                  required: true,
                })}
                handleChange={handleChange}
              />
              {errors.name && (
                <span className={styles.error}>field is required</span>
              )}
            </div>
            <div className={styles.group}>
              <FormInput
                type="email"
                label="Your email"
                name="email"
                value={email}
                register={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                handleChange={handleChange}
              />
              {errors.email && (
                <span className={styles.error}>invalid email address</span>
              )}
            </div>
            <div className={styles.group}>
              <textarea
                placeholder="your message"
                value={message}
                ref={register}
                name="message"
                onChange={handleChange}
              ></textarea>
            </div>
            <CustomButton type="submit">SEND MESSAGE</CustomButton>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Resell;
