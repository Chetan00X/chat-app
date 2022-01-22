import { Button } from "@mui/material";
import { useState } from "react";
import React from "react";
import classes from "./ChatInput.module.css";
import { useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
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
        user: "chetan Srivastava",
        userImages: "https://pbs.twimg.com/media/EkTogZ-X0AEBn-W.jpg",
      });
    } catch (error) {
      alert(error.message);
    }
    setInput("");
  };

  return (
    <div className={classes["container"]}>
      <form>
        <input
          type="text"
          placeholder={`Message #`}
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
