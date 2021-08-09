import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useAppSelector } from "../../../core/store/hooks";
import HomePage from "../../../pages/home";
import LoginPage from "../../../pages/login";
import ProfilePage from "../../../pages/profile";
import UserProfilePage from "../../components/UserProfilePage/UserProfilePage";

const RouterNav: React.FC = () => {
  const token = useAppSelector((state) => state.auth.authToken);

  return (
    <Router>
      <Switch>
        <Route path="/profiles/:username">
          <UserProfilePage />
        </Route>
        <Route path="/profile">
          {token ? <ProfilePage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {!token ? <LoginPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {token ? <HomePage /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterNav;
