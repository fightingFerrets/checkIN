
import React from "react";
import "./Logo.css";

const Logo = props => (
  <div className="mainContainer" style={{ backgroundImage: `url('./images/splash_bg.jpg')` }}>
    <div className="centerMe">
      <div>
        <img src="../images/logo.png" />
        <button href="" className="button loginBtn">Login</button><br />
        <button href="" className="button aboutBtn">About Us</button>
      </div>
    </div>
  </div>
);

export default Logo;
