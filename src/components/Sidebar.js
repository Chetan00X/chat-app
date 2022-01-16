import React from "react";
import classes from "./Sidebar.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
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

function Sidebar() {
  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <div className={classes["info"]}>
          <h2>PUNCHAT</h2>
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
    </div>
  );
}

export default Sidebar;
