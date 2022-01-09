import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCtr16n8VsrLzEeOZvvNBXmdU6qay25Vkk",
    authDomain: "jchat-a04ca.firebaseapp.com",
    projectId: "jchat-a04ca",
    storageBucket: "jchat-a04ca.appspot.com",
    messagingSenderId: "94223278912",
    appId: "1:94223278912:web:41baa0d01ae6a5208cd0a5",
  })
  .auth();
