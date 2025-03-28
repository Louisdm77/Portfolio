import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Me from "./components/me";
import Services from "./components/services";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <Router>
      {" "}
      <div className="">
        <NavBar />
        <Me />
        <Services />
        <AboutMe/>
      </div>
    </Router>
  );
}

export default App;
