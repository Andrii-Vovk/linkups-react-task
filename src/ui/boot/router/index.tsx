import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import HomePage from "../../../pages/home";
import LoginPage from "../../../pages/login";
import ProfilePage from "../../../pages/profile";
import SecureRoute from "../../components/SecureRoute/SecureRoute";
import UserProfilePage from "../../components/UserProfilePage/UserProfilePage";

const RouterNav: React.FC = () => {

  return (
    <Router>
      <Switch>
        <SecureRoute path="/profiles/:username" authReqiured fallback="/login">
          <UserProfilePage />
        </SecureRoute>

        <SecureRoute path="/profile" authReqiured fallback="/login">
          <ProfilePage />
        </SecureRoute>

        <SecureRoute path="/login" fallback="/">
          <LoginPage />
        </SecureRoute>

        <SecureRoute path="/" authReqiured fallback="/login">
          <HomePage />
        </SecureRoute>
      </Switch>
    </Router>
  );
};

export default RouterNav;
