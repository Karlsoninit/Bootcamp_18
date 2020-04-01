import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../form/Form";
import List from "../list/List";
import { getTask } from "../../redux/operations";
import Filter from "../Filter";

class Notes extends Component {
  state = {};
  componentDidMount() {
    this.props.getTask();
  }
  render() {
    return (
      <>
        <Form />
        <Filter />
        <List />
      </>
    );
  }
}

export default connect(null, { getTask })(Notes);
