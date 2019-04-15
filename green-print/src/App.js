import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import { compose } from "redux";
// import styled from "styled-components";
import "./App.css";

import Headbar from "./components/layout/Headbar";
import Dasboard from "./components/layout/Dashboard";
import Financial from "./components/metro/information/Financial";
import MetroHome from "./components/metro/MetroHome";
import About from "./components/layout/About";
import AppHome from "./components/layout/AppHome";
import RoadHome from "./components/road/RoadHome";
import Environmental from "./components/metro/information/Environmental";
import { Login } from "./components/layout/Login";

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Router>
        <Headbar />
        <div>
          <Route
            exact
            path="/"
            render={props => <Dasboard {...props} auth={auth} />}
          />
          <Route
            path="/about"
            render={props => <About {...props} auth={auth} />}
          />
          <Route
            path="/apphome"
            render={props => <AppHome {...props} auth={auth} />}
          />
          <Route
            path="/road"
            render={props => <RoadHome {...props} auth={auth} />}
          />
          <Route
            path="/metro"
            render={props => <MetroHome {...props} auth={auth} />}
          />
          <Switch>
            <Route path="/financial" component={Financial} />
            <Route path="/environmental" component={Environmental} />
            <Route
              path="/login"
              render={props => <Login {...props} auth={auth} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
