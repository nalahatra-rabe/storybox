import React from "react";
import "./style.scss";
import logo from "../../assets/images/logo.png";

function Loader() {
  return (
    <div className="Loader">
      <div className="loader_logo">
        <img src={logo} alt="logo" />
        <h3>
          <span>Story</span> Box
        </h3>
      </div>
      <div className="mini_card">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
