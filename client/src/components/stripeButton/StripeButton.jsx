import React from "react";

import StripeCheckout from "react-stripe-checkout";

import { withRouter } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

import styles from "./stripe-button.module.scss";
import { clearAllItems } from "../../redux/cart/cartActions";
import { connect } from "react-redux";

const img = require("../../img/stripe.png");

const StripeButton = ({ price, history }) => {
  const priceForStripe = price * 100;
  const PUBLISHABLE_KEY = "pk_test_i28ouERO9Dli1OlxDdGM7HFA00hCEjnkrw";

  const onToken = async (token) => {
    console.log(token);
    try {
      await axios({
        url: "/payment",
        method: "post",
        data: {
          token,
          amount: priceForStripe,
        },
      });
      swal("Done", "payment was successfull", "success");
      clearAllItems();
      localStorage.clear();
      history.push("/complete-order");
    } catch (e) {
      swal("Ooops, something went wrong, please try again", "error");
      console.log(e);
    }
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
      stripeKey={PUBLISHABLE_KEY}
    >
      <button className={styles.stripeButton}>PAY NOW</button>
    </StripeCheckout>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearAllItems: () => dispatch(clearAllItems),
});
export default connect(null, mapDispatchToProps)(withRouter(StripeButton));
