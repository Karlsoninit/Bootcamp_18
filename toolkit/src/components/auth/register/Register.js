import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./register.module.css";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/operations";

class Register extends Component {
  state = {
    nickname: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
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
            label="Nickname"
            variant="outlined"
            name="nickname"
            onChange={this.handleChange}
          />
          <TextField
            className={styles.input}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            onChange={this.handleChange}
          />
          <button className={styles.btn} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { registerUser })(Register);
