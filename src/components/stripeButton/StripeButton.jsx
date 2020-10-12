import React from "react";

import StripeCheckout from "react-stripe-checkout";

import styles from "./stripe-button.module.scss";

const img = require("../../img/logo.jpg");

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_i28ouERO9Dli1OlxDdGM7HFA00hCEjnkrw";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      name="MB Laimingas Hipis"
      billingAddress
      shippingAddress
      image={img}
      description={`Your total price is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <button className={styles.stripeButton}>PAY NOW</button>
    </StripeCheckout>
  );
};
export default StripeButton;
