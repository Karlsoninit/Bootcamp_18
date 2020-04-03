import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions";

const LogOut = ({ logOut }) => <button onClick={logOut}>logOut</button>;

export default connect(null, { logOut })(LogOut);
