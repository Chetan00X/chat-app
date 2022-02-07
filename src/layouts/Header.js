import React from "react";
import classes from "./Header.module.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { sidebarToggle } from "../store/ui-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const roomId = useSelector((state) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    if (!roomId) dispatch(sidebarToggle({ isSidebarOpen: true }));
    else dispatch(sidebarToggle({ isSidebarOpen: false }));
  };

  const logOutHandler = () => {
    signOut(auth);
  };

  console.log(roomId);

  return (
    <div className={classes.container}>
      <div className={classes["header-left"]}>
        <button onClick={toggleSidebarHandler}>
          <DehazeIcon fontSize="large" />
        </button>
        <Avatar
          className={classes.avatar}
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={logOutHandler}
        />
      </div>
      <div className={classes["searchBar"]}>
        <SearchIcon />
        <input type="text" placeholder="Search Chat" />
      </div>
    </div>
  );
}

export default Header;
