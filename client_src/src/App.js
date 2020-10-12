import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/meetups/add" className="btn-floating btn-large red">
        <div className="fa fa-plus"></div>
      </Link>
    </div>
  </div>
);

export default App;
