import React, { Component } from "react";
import shortID from "shortid";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const initialState = {
  name: "",
  todo: "",
  description: ""
};

// const styles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: 200
//     }
//   }
// }));

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
    console.log("render Form");
    // const classes = styles();
    const { name, todo, description } = this.state;
    return (
      <form
        // className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmitForm}
      >
        <TextField
          onChange={this.handleChangeValue}
          type="text"
          name="name"
          value={name}
          label="Outlined"
          variant="outlined"
        />
        <TextField
          onChange={this.handleChangeValue}
          type="text"
          name="todo"
          value={todo}
          label="Outlined"
          variant="outlined"
        />
        <TextField
          onChange={this.handleChangeValue}
          type="text"
          name="description"
          value={description}
          label="Outlined"
          variant="outlined"
        />

        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Form;
