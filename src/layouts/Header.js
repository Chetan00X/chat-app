import React from "react";
import classes from "./Header.module.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const logOutHandler = () => {
    signOut(auth);
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["headerLeft"]}>
        <Avatar
          className={classes.avatar}
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={logOutHandler}
        />
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
