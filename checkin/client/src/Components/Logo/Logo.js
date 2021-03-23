import React from "react";

import { Link } from "react-router-dom";
import "./Logo.css";
import "../Modal/Modal.css";
import Modal from "../Modal";
import "../SignUp/SignUp.css";
import SignUpModal from "../SignUp";

const Logo = props => (
  <div
    className="mainContainer"
    style={{ backgroundImage: `url('./images/splash_bg.jpg')` }}
  >
    <div className="centerMe">
      <div className=" animated slideInDown">
        <img src="../images/logo.png" />
        <h6>
          Anyone who is safety conscious and wants to share their location to
          loved ones in case of emergency, or taking an adventure on your own is
          our primary demographic. The app will allow you to log in and save
          contacts that you can send your location along with a brief message to
          allow for piece of mind via SMS text messaging.{" "}
        </h6>
        <button
          type="button"
          className="button loginBtn"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Login
        </button>
        <br />

        <button
          href="button"
          className="button signUpBtn"
          data-toggle="modal"
          data-target="#signUpModal"
        >
          Sign Up
        </button>
        <br />
        <Link to="/About">
          <button className="button aboutBtn">About Us</button>
        </Link>
      </div>
    </div>
    <Modal />
    <SignUpModal />
  </div>
);

export default Logo;
