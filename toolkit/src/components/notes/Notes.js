import React, { Component } from "react";
import Form from "../form/formContainer";
import List from "../list/List";

class Notes extends Component {
  state = {
    notes: ""
  };

  getNoteInfo = note => {
    // принимает note и пушит в массив notes
  };

  render() {
    return (
      <>
        <Form />
        <List />
      </>
    );
  }
}

export default Notes;
