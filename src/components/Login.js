import React from "react";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "firebase/app";

import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="loginPage">
      <div id="loginCard">
        <h1 className="huge">jChat</h1>
        <p className="regText">Your personal hangout.</p>
        <div
          className="loginButton google"
          onClick={() => {
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
          }}
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div
          className="loginButton facebook"
          onClick={() => {
            auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
          }}
        >
          <TwitterOutlined /> Sign in with Twitter
        </div>
        <br /> <br />
        <div
          className="loginButton facebook"
          onClick={() => {
            alert("Im sure you're a great person. So quit using Facebook.");
          }}
        >
          <FacebookOutlined /> Sign in with FaceBook
        </div>
      </div>
    </div>
  );
};

export default Login;
