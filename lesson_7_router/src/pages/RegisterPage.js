import React from "react";

const RegisterPage = props => (
  <>
    <h2>RegisterPage</h2>
    <button onClick={() => props.history.push("/login")}>login</button>
  </>
);

export default RegisterPage;
