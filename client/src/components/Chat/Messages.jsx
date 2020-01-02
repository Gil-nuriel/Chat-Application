import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Messages({ allMessages }) {
  return (
    <ScrollToBottom className="messages">
      {allMessages.map((message, i) => (
        <div key={i}>
          <div className="messageContainer">
            <p className="sentText mr-2">{message.userName}:</p>
            <div className="messageBox">
              <p className="messageText colorWhite">{message.message} </p>
            </div>{" "}
          </div>
        </div>
      ))}
    </ScrollToBottom>
  );
}
