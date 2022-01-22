import React from "react";
import classes from "./SidebarOption.module.css";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../store/app-slice";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
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
  console.log(title);

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };
  return (
    <div
      className={classes.container}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      <div className={classes["icons"]}>{Icon && <Icon />}</div>

      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className={classes["channel"]}>
          <span>#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
