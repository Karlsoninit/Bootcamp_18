import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Form from "../form/formContainer";
import List from "../list/List";
import Register from "../auth/register/Register";

const useRouter = token => {
  if (token) {
  }
};

class Notes extends Component {
  state = {
    notes: ""
  };

  getNoteInfo = note => {
    // принимает note и пушит в массив notes
  };

  render() {
    const { isAuth } = this.props;
    return isAuth ? (
      <>
        <Form />
        <List />
      </>
    ) : (
      <Register />
    );
  }
}

const mapSTP = state => ({
  isAuth: state.auth.token
});

export default connect(mapSTP)(Notes);
