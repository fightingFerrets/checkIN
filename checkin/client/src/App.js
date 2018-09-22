import React, { Component } from 'react';
import './App.css';
import Logo from "./Components/Logo";
// import Modal from "./Components/Modal";
import MapContainer from "./Components/Map";

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Logo />

      </div>

    );
  }
}

export default App;
