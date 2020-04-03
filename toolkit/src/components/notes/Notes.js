import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import HomePage from "../../pages/HomePage";

const useRouter = token => {
  if (token) {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </Switch>
  );
};

class Notes extends Component {
  state = {
    notes: ""
  };

  render() {
    const { isAuth } = this.props;
    const routing = useRouter(isAuth);
    return routing;
  }
}

const mapSTP = state => ({
  isAuth: state.auth.token
});

export default connect(mapSTP)(Notes);
