import React, { useState } from "react";
import classes from "./Chat.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { query, orderBy, doc, collection } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import ChatInput from "./ChatInput";

function Chat() {
  const roomId = useSelector((state) => state.app.roomId);
  console.log(roomId);

  const roomRef = doc(db, "rooms", roomId);
  const roomDetailRef = collection(roomRef, "messages");

  const q = query(roomDetailRef, orderBy("timestamp", "asc"));

  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));
  const [roomMessages, loading] = useCollection(
    roomId &&
      query(
        collection(doc(db, "rooms", roomId), "messages"),
        orderBy("timestamp", "asc")
      )
  );

  // console.log(roomMessages);
  // console.log(roomDetails);

  return (
    <div className={classes.container}>
      <>
        <div className={classes["header"]}>
          <div className={classes["headerLeft"]}>
            <h4>
              <strong>#Room-name</strong>
            </h4>
            <StarBorderIcon />
          </div>
          <div className={classes["headerRight"]}>
            <p>
              <InfoIcon /> Details
            </p>
          </div>
        </div>
        <div className={classes["chat-messages"]}>
          {/* List out the  messages */}
        </div>
        <ChatInput channelId={roomId} />
      </>
    </div>
  );
}

export default Chat;
