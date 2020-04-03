import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/operations";
import Form from "../components/form/formContainer";
import List from "../components/list/List";
import LogOut from "../components/logOut/LogOut";

class HomePage extends Component {
  // state = {  }

  async componentDidMount() {
    setTimeout(() => {
      this.props.getData();
    }, 1000);
  }

  render() {
    return (
      <>
        <div style={{ position: "absolute", right: "30px", top: "30px" }}>
          <LogOut />
        </div>
        {/* <h2>{this.props.userName}</h2> */}
        <Form />
        <List />
      </>
    );
  }
}

// const mapSTP = state => ({
//   userName: state.auth.user.nickname
// });

export default connect(null, { getData })(HomePage);
