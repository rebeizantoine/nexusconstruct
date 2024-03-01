import React from "react";
import { Helmet } from "react-helmet";
import "../Styles/header.css";
import Phone from "../Images/phone.png";
import SteelCity from "../Images/steelcity.png";
const Header = () => {
  return (
    <div>
      <div className="header-box">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="header-all">
          <div className="header-title">
            <img className="steel-city" src={SteelCity} alt="" />
          </div>
          <div className="header-1">
            <nav>
              <ul className="header-ul">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-2">
            <div className="image-circle">
              <img src={Phone} className="phone-image" alt="" />
            </div>
            <div className="box-near-header">
              <p className="p-header">Need help?</p>
              <h4 className="h4-header">09-232-330</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
