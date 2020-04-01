import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { filterNote } from "../redux/actions";
// import {} from "../../redux/operations";

console.log("Component", Component);

class Filter extends Component {
  state = {
    qwery: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.filterNote(this.state.qwery);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // const {} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Filter"
            variant="outlined"
            name="qwery"
            onChange={this.handleChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}

// const mapSTP = state => ({
//   token: state.token
// });

export default connect(null, { filterNote })(Filter);
