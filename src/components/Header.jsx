import React from "react";
import "./example.css";
import icon1 from "../img/header-icon1.png";
import icon2 from "../img/header-icon2.png";
import info1 from "../img/icon1.png";
import info2 from "../img/icon2.png";
import info3 from "../img/icon3.png";
import info4 from "../img/icon4.png";
import info5 from "../img/icon5.png";
import info6 from "../img/icon6.png";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="left-head">
          <h1>Discover, nurture, bloom</h1>
          <p className="firstP">Product & Engineering Recruitment</p>
          <p className="secondP">
            va va bloom, with a human touch and a dash of
          </p>
        </div>
        <div className="right-head">
          <img id="header-icon1" src={icon1} alt="" />
          <img id="header-icon2" src={icon2} alt="" />
        </div>
      </div>
      <div className="info-block">
        <ul className="info-list">
          <li className="info-item">
            <img src={info1} alt="" />
          </li>
          <li className="info-item">
            <img src={info2} alt="" />
          </li>
          <li className="info-item">
            <img src={info3} alt="" />
          </li>
          <li className="info-item">
            <img src={info4} alt="" />
          </li>
          <li className="info-item">
            <img src={info5} alt="" />
          </li>
          <li className="info-item">
            <img src={info6} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
