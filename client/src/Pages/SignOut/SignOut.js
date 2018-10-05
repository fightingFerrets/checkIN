import React, { Component } from "react";
import Nav from "../../Components/Nav";
import { Container, Button } from "../../Components/Parts";

//this should also set your status in mongodb to signed out

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="signOut">
          {/* <h1>Have you checked in?</h1> */}
          <Button
            //clickfunction
            value="Log Out"
            className="d-block"
          >
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
