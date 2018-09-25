import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About/About";
// import Modal from "./Components/Modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapContainer from "./Components/Map";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/checkIn" component={CheckIn} />
      </Switch>
    </div>
  </Router>
)


export default App;
