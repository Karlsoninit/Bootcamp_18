import React, { Component } from "react";

class Home extends Component {
  state = {};

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   console.log(JSON.parse(localStorage.getItem("isAuth")));
  //   console.log("Home props", this.props);
  //   if (!JSON.parse(localStorage.getItem("isAuth")).isAuth) {
  //     this.props.history.push("/login");
  //   }

  //   console.log("wellcome");
  // }

  render() {
    return (
      <>
        <h2>HOME</h2>
        <button
          onClick={() => {
            localStorage.setItem("isAuth", JSON.stringify({ isAuth: false }));
            this.props.history.push("/login");
          }}
        >
          LogOut
        </button>
      </>
    );
  }
}

export default Home;
