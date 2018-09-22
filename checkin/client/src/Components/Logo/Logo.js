
import React from "react";

import { Link } from "react-router-dom";
import "./Logo.css";
import "../Modal/Modal.css";
import Modal from "../Modal";

const Logo = props => (
  <div className="mainContainer" style={{ backgroundImage: `url('./images/splash_bg.jpg')` }}>
    <div className="centerMe">
      <div>
        <img src="../images/logo.png" />
        <button type="button" className="button loginBtn" data-toggle="modal" data-target="#exampleModal">Login</button><br />
        <Link to="/About"><button className="button aboutBtn" >About Us</button></Link>
      </div>
    </div>
    <Modal />
  </div >





);

export default Logo;
