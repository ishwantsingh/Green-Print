import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import styled from "styled-components";
import "./App.css";

import Headbar from "./components/layout/Headbar";
import Dasboard from "./components/layout/Dashboard";

import MetroHome from "./components/metro/MetroHome";
import About from "./components/layout/About";
import AppHome from "./components/layout/AppHome";
import RoadHome from "./components/road/RoadHome";

class App extends Component {
  render() {
    return (
      <Router>
        <Headbar />
        <nav>
          <Route exact path="/" component={Dasboard} />
          <Route path="/about" component={About} />
          <Route path="/apphome" component={AppHome} />
          {/* <Route path="/road" component={RoadHome} /> */}
          <Route path="/metro" component={MetroHome} />
        </nav>
      </Router>
    );
  }
}

export default App;
