import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import CheckIn from "./Pages/CheckIn";
import SignOut from "./Pages/SignOut";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/checkIn" component={CheckIn} />
        <Route exact path="/signOut" component={SignOut} />
      </Switch>
    </div>
  </Router>
)


export default App;
