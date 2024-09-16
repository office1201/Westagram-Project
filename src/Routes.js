import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import MainPage from "./Pages/Main/MainPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/mainPage" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
