import React, { Component } from "react";
import List from "./list/list";
// import ps from "../ps";
import WishList from "./wishList/WishList";

class App extends Component {
  state = {
    wishes: [
      {
        title: "react"
      }
    ]
  };

  showWish = wish => {
    console.log("app", wish);
    this.setState(prevState => ({
      wishes: [...prevState.wishes, { title: wish }]
    }));
  };
  render() {
    console.log("rerender APP");
    return (
      <>
        <WishList showWish={this.showWish} />
        <List ps={this.state.wishes} />
      </>
    );
  }
}

export default App;
