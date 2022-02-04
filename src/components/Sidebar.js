import React from "react";
import classes from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels] = useCollection(collection(db, "rooms"));
  const auth = getAuth();
  const [user] = useAuthState(auth);

  console.log(channels);

  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <div className={classes["info"]}>
          <h2>PANCHAT</h2>
          <h3>
            <FiberManualRecordIcon className={classes["fiber"]} />
            Chetan
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mention & reaction" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="channel browser" />
      <SidebarOption
        Icon={PeopleAltIcon}
        addChannelOption={false}
        title="People & user groups"
      />
      <SidebarOption Icon={AppsIcon} addChannelOption={false} title="Apps" />
      <SidebarOption
        Icon={FileCopyIcon}
        addChannelOption={false}
        title="File browser"
      />
      <SidebarOption
        Icon={ExpandLessIcon}
        addChannelOption={false}
        title="show less"
      />
      <hr />
      <SidebarOption
        Icon={ExpandMoreIcon}
        addChannelOption={false}
        title="channels"
      />
      <hr />
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
  );
}

export default Sidebar;
