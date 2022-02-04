import React from "react";
import classes from "./Message.module.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className={classes["container"]}>
      <img src={userImage} alt="user-image" />
      <div className={classes["message-info"]}>
        <h4>
          {user} <span>{timestamp}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
