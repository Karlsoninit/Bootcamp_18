import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./form.module.css";

class Form extends Component {
  state = {
    note: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNotes({ note: this.state.note });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
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
  }
}

export default Form;
