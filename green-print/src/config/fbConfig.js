import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCjdk-PN8wEvyrpB_hc25p7kLi48N-ImXU",
  authDomain: "greenprint88.firebaseapp.com",
  databaseURL: "https://greenprint88.firebaseio.com",
  projectId: "greenprint88",
  storageBucket: "greenprint88.appspot.com",
  messagingSenderId: "20018434024"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
