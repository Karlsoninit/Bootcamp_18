import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./form.module.css";
import { NotesContext } from "../notes/Notes";

class Form extends Component {
  state = {
    note: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const note = {
      note: this.state.note
    };

    this.props.onGetNoteInfo(note);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <NotesContext.Consumer>
        {context => {
          // console.log("context --> ", context);
          return (
            <div className={styles.container}>
              <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField
                  className={styles.input}
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  name="note"
                  onChange={this.handleChange}
                />
              </form>
            </div>
          );
        }}
      </NotesContext.Consumer>
    );
  }
}

export default Form;
