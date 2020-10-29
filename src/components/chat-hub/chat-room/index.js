import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const ChatRoom = ({ connection, setChooseRoom }) => {
  const [room, setRoom] = useState(null);
  const [arrayRoom, setArrayRoom] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44372/api/ChatRoom")
      .then((response) => response.json())
      .then((data) => {
        setArrayRoom(data);
      })
      .catch((ex) => console.log(ex));

    connection.on("NewRoom", (roomName, roomId) => {
      setArrayRoom((prev) => {
        return [...prev, { id: roomId, name: roomName }];
      });
    });
  }, []);

  const sendBtn = () => {
    connection
      .invoke("AddItemChatRoom", room)
      .catch((err) => console.error(err.toString()));
  };

  const handleChangeText = ({ target: { value } }) => {
    setRoom(value);
  };

  return (
    <div className={styles.chatRoom}>
      <div className={styles.containerRoom}>
        <ul>
          {arrayRoom.length !== 0 &&
            arrayRoom.map((rc, index) => {
              return (
                <li key={index}>
                  <a onClick={() => setChooseRoom(rc.id)}> {rc.name}</a>
                </li>
              );
            })}
        </ul>
      </div>
      <div className={styles.containerAddRoom}>
        <input
          type="text"
          placeholder="Nhập số phòng"
          onChange={handleChangeText}
        />
        <button onClick={() => sendBtn()}>Gửi</button>
      </div>
    </div>
  );
};

export default ChatRoom;
