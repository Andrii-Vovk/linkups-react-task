import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { hasToken } from "../../../core/services/authHandling";
import HomePage from "../../../pages/home";
import LoginPage from "../../../pages/login";
import ProfilePage from "../../../pages/profile";

const RouterNav: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route path="/profile">
          {!hasToken() ? <ProfilePage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!hasToken() ? <LoginPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {hasToken() ? <HomePage /> : <Redirect to='/login' />}
          </Route>
        </Switch>
    </Router>
  );
};

export default RouterNav;
