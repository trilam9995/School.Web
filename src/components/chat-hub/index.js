import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ChatRoom from "./chat-room";
import ChatMessage from "./chat-message";
import { HubConnectionBuilder } from "@aspnet/signalr";

const ChatHub = (props) => {
  const [chooseRoom, setChooseRoom] = useState(null);
  const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:44372/chatHub")
    .build();

  connection
    .start({ withCredentials: false })
    .catch((err) => console.error(err.toString()));

  return (
    <div className={styles.chatContainer}>
      <ChatRoom connection={connection} setChooseRoom={setChooseRoom} />
      <ChatMessage connection={connection} chooseRoom={chooseRoom} />
    </div>
  );
};

export default ChatHub;
