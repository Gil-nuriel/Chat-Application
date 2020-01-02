import React, { Fragment } from "react";

export default function InputBox({ message, handleChange, handleChat }) {
  return (
    <Fragment>
      <div className="formForChat">
        <input
          className="inputForChat"
          type="text"
          placeholder="Message"
          value={message}
          onChange={e => handleChange(e)}
        />
        <button className="sendButton" onClick={e => handleChat(e)}>
          Send
        </button>
      </div>
    </Fragment>
  );
}
