import React from "react";
import "./example.css";
import rating from "../img/rating.png";
import google from "../img/google.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <img className="google-icon" src={google} alt="" />
        <ul className="footer-left-list">
          <li id="first-list-rating">
            5.0
            <img id="rating-icon" src={rating} alt="" />
          </li>
          <li>Based on 106 reviews</li>
        </ul>
      </div>
      <div className="footer-center">
        <ul className="footer-center-list">
          <li>Grow your career</li>
          <li>Build a team</li>
        </ul>
      </div>
      <div className="footer-end">
        <ul className="footer-end-list">
          <li>Meet the founders</li>
          <li>Mentorship</li>
          <li>Say hello</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
