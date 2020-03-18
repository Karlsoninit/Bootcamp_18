import React, { Component } from "react";

import db from "../config";
import { withRouter } from "react-router-dom";

class RegisterPage extends Component {
  state = {
    message: null,
    email: "",
    password: ""
  };

  // componentDidMount() {
  //   console.log("componentDidMount Login");
  //   this.createUser("maxa@gmail.com", "qwerty");
  // }

  createUser = async (email, pass) => {
    try {
      const data = await db.auth().createUserWithEmailAndPassword(email, pass);
      console.log(data);
    } catch (error) {
      this.setState({ message: error.message });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.createUser(email, password);
  };

  render() {
    const { message } = this.state;
    return (
      <>
        <h2>RegisterPage</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="email"
            name="email"
            type="email"
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {/* {message ? <h2>{message}</h2> : <h2>welcome !!</h2>} */}
        <button onClick={() => this.props.history.push("/login")}>login</button>
      </>
    );
  }
}

export default withRouter(RegisterPage);
