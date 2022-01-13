import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
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
        <br /> <br />
        <p className="small">
          Brb with full backend, auth, and no ChatEngine. Until then... firebase
          is pretty sweet.
        </p>
      </div>
    </div>
  );
};

export default Login;
