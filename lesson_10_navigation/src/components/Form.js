import React, { Component } from "react";

import { NotesContext } from "../context/notes/notesContext";

class Form extends Component {
  state = {
    query: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.query);
  };
  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    const { query } = this.state;
    return (
      <NotesContext.Consumer>
        {value => {
          console.log("context", value);
          return (
            <form
              onSubmit={e => {
                this.handleSubmit(e);
                value.getNote({ query });
              }}
            >
              <input onChange={this.handleChange} />
            </form>
          );
        }}
      </NotesContext.Consumer>
    );
  }
}

export default Form;
