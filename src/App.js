import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Sidebar from "./components/Sidebar";
import React from "react";
import Chat from "./Chat/Chat";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import Spinner from "react-spinkit";

function App() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className="app-loading">
        <Spinner name="pacman" color="purple" />
      </div>
    );
  }
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="appBody">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
