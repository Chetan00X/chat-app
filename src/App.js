import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <Sidebar />
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
