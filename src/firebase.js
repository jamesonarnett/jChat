import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey:
    authDomain: "jchat-a04ca.firebaseapp.com",
    projectId: "jchat-a04ca",
    storageBucket: "jchat-a04ca.appspot.com",
    messagingSenderId: 
    appId: 
  })
  .auth();
