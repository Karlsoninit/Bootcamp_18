import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDrgILcTg4U4_Va7nYPGVqi_Iv3BnBGjE4",
  authDomain: "authorization-3e689.firebaseapp.com",
  databaseURL: "https://authorization-3e689.firebaseio.com",
  projectId: "authorization-3e689",
  storageBucket: "authorization-3e689.appspot.com",
  messagingSenderId: "820706513856",
  appId: "1:820706513856:web:1af7ebfaa57ab0025e2e25",
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig);
