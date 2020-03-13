import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewsPage from "./pages/NewsPage";

export const useRouter = isAuthentication => {
  if (isAuthentication) {
    return (
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/home/:id" component={NewsPage} />
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/contact" component={ContactPage} />
      <Redirect to="/login" />
    </Switch>
  );
};
