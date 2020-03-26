import React from "react";
import { connect } from "react-redux";

function App() {
  return (
    <div style={{ width: 300, margin: "auto" }}>
      <button>Increment</button>
      <h2>0</h2>
      <button>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect()(App);
