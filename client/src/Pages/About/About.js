
import React, { Component } from "react";
import "./About.css";
import Nav from "../../Components/Nav"
class About extends Component {
    render() {
        return (
            <div id="allContian" style={{ backgroundImage: `url('./images/a_splash.jpg')` }}>
                <Nav />

                <div className="aboutContainer">

                    <div className="d">
                        <img src="../images/ff_logo.png" className="ffLogo" />
                        <div id="ourNames">
                            <a href="https://github.com/NOEL86" className="developers" title="Ashley Jimenez" target="_blank">Ashley J.</a>
                            <a href="https://github.com/blaveder" className="developers" title="Brannon Laveder" target="_blank">Brannon L.</a>
                            <a href="https://github.com/jterry63" className="developers" title="Jordan Terry" target="_blank">Jordan T.</a>
                            <a href="https://github.com/jdlibbee" className="developers" title="Justin Libbee" target="_blank">Justin L.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;