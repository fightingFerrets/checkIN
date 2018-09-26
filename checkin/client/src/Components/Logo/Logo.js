
import React from "react";

import { Link } from "react-router-dom";
import "./Logo.css";
import "../Modal/Modal.css";
import Modal from "../Modal";
import "../SignUp/SignUp.css";
import SignUpModal from "../SignUp";


const Logo = props => (
  <div className="mainContainer" style={{ backgroundImage: `url('./images/splash_bg.jpg')` }}>
    <div className="centerMe">
      <div>
        <img src="../images/logo.png" />
        <button type="button" className="button loginBtn" data-toggle="modal" data-target="#exampleModal">Login</button><br />

        <button href="button" className="button signUpBtn"  data-toggle="modal" data-target="#signUpModal">Sign Up</button><br></br>
        <button href="" className="button aboutBtn">About Us</button>
      </div>
    </div>
    <Modal />
    <SignUpModal />
    
  </div>






);

export default Logo;
