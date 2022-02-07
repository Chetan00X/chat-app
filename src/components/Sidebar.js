import React from "react";
import classes from "./Sidebar.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import AddIcon from "@mui/icons-material/Add";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";

function Sidebar() {
  const [channels] = useCollection(collection(db, "rooms"));
  const roomId = useSelector((state) => state.ui.isSidebarOpen);
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    roomId && (
      <div className={classes.container}>
        <div className={classes["header"]}>
          <div className={classes["info"]}>
            <h2>PANCHAT</h2>
            <h3>
              <FiberManualRecordIcon className={classes["fiber"]} />
              {user?.displayName}
            </h3>
          </div>
          <CreateIcon />
        </div>
        <SidebarOption
          Icon={AddIcon}
          addChannelOption={true}
          title="Add Channel"
        />
        {channels?.docs.map((doc) => (
          <React.Fragment key={doc.id}>
            <SidebarOption
              id={doc.id}
              title={doc.data().name}
              addChannelOption={false}
            />
          </React.Fragment>
        ))}
      </div>
    )
  );
}

export default Sidebar;
