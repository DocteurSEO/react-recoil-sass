import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const ref = firebase.database().ref();
