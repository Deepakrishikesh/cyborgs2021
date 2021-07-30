import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCkWfgdqI61U9rAU35KI4DBBrAWHAl-UTI",
    authDomain: "cyborg-s-2021.firebaseapp.com",
    projectId: "cyborg-s-2021",
    storageBucket: "cyborg-s-2021.appspot.com",
    messagingSenderId: "592839920636",
    appId: "1:592839920636:web:b5f79fd0871f0fcf1dc079",
    measurementId: "G-E7HEPK25PM"
  };

  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;