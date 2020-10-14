import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBTaxkv-nFyzUuZuQZuQ0stGiW4J_BcIm8",
  authDomain: "kombucha-shop.firebaseapp.com",
  databaseURL: "https://kombucha-shop.firebaseio.com",
  projectId: "kombucha-shop",
  storageBucket: "kombucha-shop.appspot.com",
  messagingSenderId: "897632217885",
  appId: "1:897632217885:web:136e303e762091b2054ff4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const getDrinks = async () => {
  const data = await firebase
    .firestore()
    .collection("drinks")
    .where("drink", "==", true)
    .get();

  const array = [];

  data.forEach((item) => {
    const obj = {
      id: item.id,
      name: item.data().name,
      price: item.data().price,
      imgUrl: item.data().imgUrl,
      description: item.data().description
    };
    array.push(obj);
  });
  return array;
};

export const getShopDrinks = async () => {
  const data = await firebase
    .firestore()
    .collection("drinks")
    .where("shop", "==", true)
    .get();

  const array = [];

  data.forEach((item) => {
    const obj = {
      id: item.id,
      name: item.data().name,
      price: item.data().price,
      imgUrl: item.data().imgUrl,
      description: item.data().description
    };
    array.push(obj);
  });
  return array;
};
