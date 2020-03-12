import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useRouter } from "./router";

function App() {
  const routing = useRouter(false);
  return (
    <>
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

export default App;
// //https:maySIte/Register
