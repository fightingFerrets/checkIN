import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import firebase, { auth, provider } from "../../firebase";
class Nav extends Component {
  logout() {
    auth.signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixMe">
        <a className="navbar-brand" href="#">
          <img src="../images/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link to="/About" className="nav-item nav-link active">
              About
            </Link>
            <Link to="/checkIn" className="nav-item nav-link active">
              Check In
            </Link>
            <Link
              onClick={this.logout}
              to="/"
              className="nav-item nav-link active"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
