import React, { Component } from "react";
import RouterPage from "./router";
import { Route } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { useRouter } from "./router";
const word = "work";

class App extends Component {
  state = {};

  render() {
    const router = useRouter(JSON.parse(localStorage.getItem("isAuth")).isAuth);
    return (
      <>
        <h2>WORK</h2>
        <Navigation />
        {/* <RouterPage word={word} /> */}
        {/* <Route render={props => <RouterPage {...props} word={word} />} /> */}
        {router}
      </>
    );
  }
}

export default App;
