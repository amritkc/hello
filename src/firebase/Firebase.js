/** @format */

import firebase from "firebase";
var firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAQRUaQ9jiwvrchJ9amnoEatj00sd-1Rs8",
  authDomain: "hello-df328.firebaseapp.com",
  projectId: "hello-df328",
  storageBucket: "hello-df328.appspot.com",
  messagingSenderId: "238250459162",
  appId: "1:238250459162:web:fb033ad1cb6a1b9e90d1a3",
  measurementId: "G-VS07WRR1M4",
});
//amrit
const Firestore = firebaseapp.firestore();
const auth = firebaseapp.auth();
const storage = firebaseapp.storage();
export { Firestore, auth, storage };
