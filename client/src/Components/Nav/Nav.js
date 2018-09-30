
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
class Nav extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light fixMe">
                <a className="navbar-brand" href="#"><img src="../images/logo.png" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
                        <Link to="/About" className="nav-item nav-link active">About</Link>
                        <Link to="/checkIn" className="nav-item nav-link active">Check In</Link>
                        <Link to="/signOut" className="nav-item nav-link active">Sign Out</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
