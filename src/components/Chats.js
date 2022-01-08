import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../context/AuthContext";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  return (
    <div className="chatsPage">
      <div className="navBar">
        <div className="logoTab">jChat</div>
        <div onClick={handleLogout} className="logoutTab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="41a2acb4-2eee-432d-b2e1-0e313f140125"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
