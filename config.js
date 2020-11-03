import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDAhqJ2ZQ7p4aowSBV9V7UNlFZu79MHceQ",
    authDomain: "bookapurva.firebaseapp.com",
    databaseURL: "https://bookapurva.firebaseio.com",
    projectId: "bookapurva",
    storageBucket: "bookapurva.appspot.com",
    messagingSenderId: "93961559296",
    appId: "1:93961559296:web:2a07f116803a9beb47e7e5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   