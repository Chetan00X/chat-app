import React, { useEffect, useState } from "react";
import classes from "./Chat.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { query, orderBy, doc, collection } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import ChatInput from "./ChatInput";
import { DockSharp } from "@mui/icons-material";
import Message from "./Message";
import { useRef } from "react";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector((state) => state.app.roomId);
  console.log(roomId);

  let roomRef, roomDetailRef, q;

  if (roomId) {
    roomRef = doc(db, "rooms", roomId);
    roomDetailRef = collection(roomRef, "messages");
    q = query(roomDetailRef, orderBy("timestamp", "asc"));
  }

  const [roomDetails] = useDocument(roomId && roomRef);
  const [roomMessages, loading] = useCollection(roomId && q);

  console.log(roomMessages);
  console.log(roomDetails?.data().name);

  useEffect(() => {
    return chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <div className={classes.container}>
      {roomDetails && roomMessages && (
        <>
          <div className={classes["header"]}>
            <div className={classes["headerLeft"]}>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
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
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImages } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={new Date(timestamp?.seconds * 1000).toLocaleString(
                    "en-US",
                    { timeZone: "Asia/Kolkata" }
                  )}
                  user={user}
                  userImage={userImages}
                />
              );
            })}
            <div className={classes["chat-bottom"]} ref={chatRef}></div>
          </div>
          <ChatInput
            channelId={roomId}
            channelName={roomDetails?.data().name}
            chatRef={chatRef}
          />
        </>
      )}
    </div>
  );
}

export default Chat;
