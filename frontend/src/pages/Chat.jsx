import { useState, useEffect } from "react";
import { socket } from "../socket";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const userId = sessionStorage.getItem("userId");
  const partnerId = sessionStorage.getItem("partnerId");

  const users = {
    1: "Bilal",
    2: "Ahmet",
    3: "Mehmet",
  };

  //  Mesajları güncelleyen fonksiyon (DOM'a manuel eklemek yerine state kullanıyoruz)
  const displayMessage = (senderId, message) => {
    setMessages((prev) => [...prev, { senderId, message }]);
  };

  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      displayMessage(data.userId, data.message); // Gelen mesajı ekrana yazdır
    };

    return () => {
      socket.onmessage = null;
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const msg = { userId, partnerId, message };
      socket.send(JSON.stringify(msg));
      displayMessage(userId, message); // Mesajı ekrana yazdır
      setMessage(""); // Input'u temizle
    }
  };

  return (
    <div className="chat-container">
      <h2>Hoş Geldin {users[userId]}</h2>
      <p>Sohbet: {users[partnerId]}</p>

      {/*  Sohbet Kutusu */}
      <div className="chat-box" id="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.senderId === userId ? "message sent" : "message received"
            }
          >
            <strong>{users[msg.senderId] || "Bilinmeyen"}:</strong>{" "}
            {msg.message}
          </div>
        ))}
      </div>

      {/* 📌 Mesaj Girişi */}
      <div className="message-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı yazın..."
        />
        <button onClick={sendMessage}>Gönder</button>
      </div>
    </div>
  );
};

export default Chat;
