import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { compose } from "redux";
import styled from "styled-components";

import "./App.css";

import Headbar from "./components/layout/Headbar";
import Dasboard from "./components/layout/Dashboard";

import MetroHome from "./components/metro/MetroHome";
import About from "./components/layout/About";

class App extends Component {
  render() {
    return (
      <Router>
        <Headbar />
        <Switch>
          <Route exact path="/" component={Dasboard} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
