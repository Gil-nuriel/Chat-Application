import React, { Fragment, useState, useEffect } from "react";
import io from "socket.io-client";
import InputBox from "./InputBox";
import CheckAuth from "./CheckAuth";
import ChatBar from "./ChatBar";
import Messages from "./Messages";
import { ToastContainer, toast } from "react-toastify";

const socket = io("http://localhost:5000");

function Chat() {
  const [message, setMessage] = useState("");
  const [userName] = useState(
    JSON.parse(atob(localStorage.getItem("token").split(".")[1])).name
  );
  const [userTyping, setUserTyping] = useState(null);
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    socket.emit("join", userName);
    socket.on("chat-message", data => {
      toast(`Hello ${data}`);
    });
    socket.on("user-joined", data => {
      toast(`${data} joined the chat`);
    });
  }, [userName]);

  useEffect(() => {
    function handleAllMessages(data) {
      setAllMessages(allMessages => [...allMessages, data]);
    }
    socket.on("broadcast-message", data => {
      handleAllMessages(data);
    });
    socket.on("my-message", data => {
      data["userName"] = "You"; //adding a propery to data object
      handleAllMessages(data);
    });
  }, []);

  useEffect(() => {
    socket.on("who-typing", data => {
      setUserTyping(data);
      setTimeout(() => {
        setUserTyping(null);
      }, 2500);
    });
  }, [userTyping]);

  useEffect(() => {
    socket.on("user-disconnected", data => {
      toast(`${data} left the chat`);
    });
  }, []);

  function handleChat(e) {
    e.preventDefault();
    if (message.trim() === "") return toast.warn("not valid message");
    socket.emit("user-message", message, userName);
    setMessage("");
  }

  function handleChange(e) {
    setMessage(e.target.value);
    socket.emit("typing", userName);
  }

  return (
    <Fragment>
      <CheckAuth />
      <ToastContainer />
      <div className="outerContainerForChat">
        <div className="containerForChat">
          <ChatBar userTyping={userTyping} />
          <Messages allMessages={allMessages} />
          <InputBox
            message={message}
            handleChange={handleChange}
            handleChat={handleChat}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Chat;
