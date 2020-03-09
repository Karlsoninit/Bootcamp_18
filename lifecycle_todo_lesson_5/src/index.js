import React from "react";
import ReactDOM from "react-dom";
import shortId from "shortid";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const tasks = [
  { todo: "react", id: shortId() },
  { todo: "redux", id: shortId() },
  { todo: "javascript", id: shortId() }
];

ReactDOM.render(<App tasks={tasks} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
