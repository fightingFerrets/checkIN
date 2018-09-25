import Logo from "../../Components/Logo";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
class Nav extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><img src="../images/logo.png" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/"><a class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a></Link>
                        <Link to="/About"><a class="nav-item nav-link active">About</a></Link>
                        <Link to="/checkIn"><a class="nav-item nav-link active">CheckIn</a></Link>
                        <Link to="/checkIn"><a class="nav-item nav-link active">Sign Out</a></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
