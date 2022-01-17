import React from "react";
import classes from "./SidebarOption.module.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name ");

    if (channelName) {
      try {
        const docRef = await addDoc(collection(db, "rooms"), {
          name: channelName,
        });
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const selectChannel = () => {};
  return (
    <div
      className={classes.container}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      <div className={classes["icons"]}>
        <Icon />
      </div>

      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <div className={classes["channel"]}>
          <span>#</span>
          {title}
        </div>
      )}
    </div>
  );
}

export default SidebarOption;
