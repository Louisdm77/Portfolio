import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Me from "./components/me";
import Services from "./components/services";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {" "}
      <div className="">
        <NavBar />
        <Me />
        <Services />
      </div>
    </Router>
  );
}

export default App;
