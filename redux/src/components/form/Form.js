import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import styles from "./form.module.css";
import { addNotes } from "../../redux/actions";
import { putTask, getTask } from "../../redux/operations";

const initialState = {
  note: ""
};

console.log("Component", Component);

class Form extends Component {
  state = {
    ...initialState
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...initialState
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleSubmit = async e => {
    e.preventDefault();
    // call reducer fn

    const note = {
      note: this.state.note
    };
    // if (this.state.note) {
    //   this.props.addNotes(note);
    // }
    await this.props.putTask(note);

    await this.props.getTask();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { token } = this.props;
    return (
      <div className={styles.container}>
        {token && (
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
              className={styles.input}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              name="note"
              onChange={this.handleChange}
              type="text"
            />
          </form>
        )}
      </div>
    );
  }
}
const mapSTP = state => ({
  token: state.token
});

export default connect(mapSTP, { putTask, getTask })(Form);
