import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import CheckIn from "./Pages/CheckIn";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkIn" component={CheckIn} />
      </Switch>
    </div>
  </Router>
)


export default App;
