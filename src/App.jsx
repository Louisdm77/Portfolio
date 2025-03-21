import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import MyInfo from "./components/myInfo";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {" "}
      <div className="md:hidden">
        <NavBar />
        <MyInfo/>
      </div>
    </Router>
  );
}

export default App;
