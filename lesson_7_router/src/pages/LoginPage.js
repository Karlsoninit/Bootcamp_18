import React from "react";

const LoginPage = props => {
  console.log(props);
  return (
    <>
      <h2>LoginPage</h2>
      <button onClick={() => props.history.push("/register")}>register</button>
    </>
  );
};

export default LoginPage;
