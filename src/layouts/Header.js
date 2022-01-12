import React from "react";
import classes from "./Header.module.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Header() {
  return (
    <div className={classes["container"]}>
      <div className={classes["headerLeft"]}>
        <Avatar className={classes.avatar} />
        <AccessTimeIcon className={classes.time} />
      </div>
      <div className={classes["search"]}>
        <SearchIcon />
        <input type="text" placeholder="Search PUNCHAT" />
      </div>
      <div className={classes["headerRight"]}>
        <HelpOutlineIcon className={classes["help"]} />
      </div>
    </div>
  );
}

export default Header;
