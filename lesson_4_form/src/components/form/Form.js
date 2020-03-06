import React, { Component } from "react";
import shortID from "shortid";

const initialState = {
  name: "",
  todo: "",
  description: ""
};

class Form extends Component {
  state = {
    ...initialState
  };

  handleSubmitForm = event => {
    event.preventDefault();
    // console.log(event.target);
    // const formData = new FormData(event.target);
    // const user = {};
    // formData.forEach((value, name) => (user[name] = value));
    // console.log(user);

    this.props.onGetValue({
      ...this.state,
      id: shortID(),
      date: new Date().toDateString()
    });
    this.setState({
      ...initialState
    });
  };

  handleChangeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, todo, description } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          onChange={this.handleChangeValue}
          type="text"
          name="name"
          value={name}
          placeholder="name"
        />
        <input
          onChange={this.handleChangeValue}
          type="text"
          name="todo"
          value={todo}
          placeholder="todo ..."
        />
        <input
          onChange={this.handleChangeValue}
          type="text"
          name="description"
          value={description}
          placeholder="description"
        />

        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Form;
