import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyChpHoswdohddczxXff2KKgDnlbQqPt9tE",
  authDomain: "magenagna.firebaseapp.com",
  databaseURL: "https://magenagna.firebaseio.com",
  projectId: "magenagna",
  storageBucket: "magenagna.appspot.com",
  messagingSenderId: "675954257147",
  appId: "1:675954257147:web:f7d0097c9d5b8c244b945e",
  measurementId: "G-2N973MCRZ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default firebase;