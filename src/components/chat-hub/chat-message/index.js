import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const ChatMessage = ({ connection, chooseRoom }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [arrayMessage, setArrayMessage] = useState([]);

  useEffect(() => {
    connection.on("ReceiveMessage", (user, message, roomId, Id, PostedAt) => {
      console.log("user : ", user, message);

      setArrayMessage((prev) => {
        return [
          ...prev,
          { userName: user, contents: message, postedAt: PostedAt },
        ];
      });
    });
  }, []);

  useEffect(() => {
    if (chooseRoom !== null) {
      fetch(`https://localhost:44372/api/Message/${chooseRoom}`)
        .then((response) => response.json())
        .then((data) => {
          setArrayMessage(data);
        })
        .catch((ex) => console.log(ex));
    }
  }, [chooseRoom]);

  const sendBtn = (e) => {
    e.preventDefault();
    connection
      .invoke("SendMessage", chooseRoom, user, message)
      .catch((err) => console.error(err.toString()));
  };

  return (
    <div className={styles.chatMessage}>
      {chooseRoom === null ? (
        <div>
          <p>Vui lòng chọn phòng</p>
        </div>
      ) : (
        <>
          <div className={styles.containerMessage}>
            {arrayMessage.length !== 0 &&
              arrayMessage.map((rc, index) => {
                return (
                  <div className={styles.item} key={index}>
                    <h5>
                      {rc.userName} - {rc.postedAt}
                    </h5>
                    <p>{rc.contents}</p>
                  </div>
                );
              })}
          </div>
          <form className={styles.containerAddMessage} onSubmit={sendBtn}>
            <input
              type="text"
              placeholder="Nhập Tên"
              name="user"
              onChange={({ target: { value } }) => setUser(value)}
            />
            <input
              type="text"
              placeholder="Nhập tin nhắn"
              name="message"
              onChange={({ target: { value } }) => setMessage(value)}
            />
            <button type="submit">Gửi</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatMessage;
