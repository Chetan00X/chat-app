import { Button } from "@mui/material";
import { useState } from "react";
import React from "react";
import classes from "./ChatInput.module.css";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";

function ChatInput({ channelName, channelId, chatRef }) {
  const roomId = useSelector((state) => state.ui.isSidebarOpen);

  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  console.log(channelId);
  console.log(input);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) return false;
    const roomRef = doc(db, "rooms", channelId);
    const colRef = collection(roomRef, "messages");
    try {
      const addingMessages = await addDoc(colRef, {
        message: input,
        timestamp: serverTimestamp(),
        user: user.displayName,
        userImages: user.photoURL,
      });
    } catch (error) {
      alert(error.message);
    }
    setInput("");
    return chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={classes["container"]}>
      <form>
        <input
          type="text"
          placeholder={`Message #${channelName ? channelName : ""}`}
          onChange={inputChangeHandler}
          value={input}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
