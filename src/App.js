import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Sidebar from "./components/Sidebar";
import React from "react";
import Chat from "./Chat/Chat";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
