import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="loginPage">
      <div id="loginCard">
        <h2>Welcome to jChat!</h2>
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
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
          }}
        >
          <FacebookOutlined /> Sign in with FaceBook
        </div>
      </div>
    </div>
  );
};

export default Login;
