import React from "react";
import "./example.css";
import bloomImage from "../img/bloom.png";

const Example = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img id="navbar-icon" src={bloomImage} alt="" />
      </div>
      <div className="right-nav">
        <ul className="nav-list">
          <li className="nav-item">Grow your career</li>
          <li className="nav-item">Build a team</li>
          <li className="nav-item">Meet the founders</li>
          <li className="nav-item">Mentorship</li>
          <li className="nav-item">Say hello</li>
        </ul>
      </div>
    </div>
  );
};

export default Example;
