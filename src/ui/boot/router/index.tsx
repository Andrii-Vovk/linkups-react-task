import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../../../pages/home";
import LoginPage from "../../../pages/login";
import ProfilePage from "../../../pages/profile";

const RouterNav = () => {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
};

export default RouterNav;
