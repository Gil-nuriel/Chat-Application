import React from "react";

export default function ChatBar({ userTyping }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <h5>Chat</h5>
      </div>
      <div className="rightInnerContainer">
        {userTyping ? `${userTyping} typing...` : null}
      </div>
    </div>
  );
}
