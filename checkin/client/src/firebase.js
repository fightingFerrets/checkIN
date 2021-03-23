import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA1ZmBqZBxlMfBVJu-INjqOAgDp8oH_zWw",
  authDomain: "checkin-ee574.firebaseapp.com",
  databaseURL: "https://checkin-ee574.firebaseio.com",
  projectId: "checkin-ee574",
  storageBucket: "checkin-ee574.appspot.com",
  messagingSenderId: "111866818704"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
