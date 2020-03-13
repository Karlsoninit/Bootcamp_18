import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import db from "./config";
import { useRouter } from "./router";

class App extends Component {
  state = {
    stateChanged: null
  };
  componentDidMount() {
    this.onStateChanged();
  }

  onStateChanged = async () => {
    await db.auth().onAuthStateChanged(user => {
      this.setState({ stateChanged: user });
    });
  };

  onSignOut = () => {
    db.auth().signOut();
  };

  render() {
    const { stateChanged } = this.state;
    console.log("--- user ---", stateChanged);
    const routing = useRouter(stateChanged);
    return (
      <>
        {stateChanged && (
          <button onClick={this.onSignOut}>sigOut {stateChanged.email}</button>
        )}
        <Router>
          {/* <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/register">REGISTER</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul> */}
          {routing}
        </Router>
      </>
    );
  }
}

export default App;
