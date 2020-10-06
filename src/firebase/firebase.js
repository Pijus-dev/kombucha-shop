import firebase from "firebase/app";
import "firebase/storage";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCnW9YtNQR4JL6H9QHLNohzRFi4untDDEY",
  authDomain: "kombucha-c719e.firebaseapp.com",
  databaseURL: "https://kombucha-c719e.firebaseio.com",
  projectId: "kombucha-c719e",
  storageBucket: "kombucha-c719e.appspot.com",
  messagingSenderId: "645728640643",
  appId: "1:645728640643:web:ec366d6f5406ffec2105b6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();

export const getDrinks = async () => {
  const data = await firebase.firestore().collection("drinks").get();

  const array = [];

  data.forEach((item) => {
    const obj = {
      id: item.id,
      name: item.data().name,
      price: item.data().price,
      imgUrl: item.data().imgUrl,
    };
    array.push(obj);
  });
  return array;
};
