import React, { Component } from "react";
import Nav from "../../Components/Nav";
import { Container, Button } from "../../Components/Parts";
class Home extends Component {


    render() {
        return (
            <div>
                <Nav />
                <div id="signOut">
                    <h1>Have you checked in?</h1>
                    <Button>Sign Out</Button>
                </div>
            </div>
        )
    }
}

export default Home; 
