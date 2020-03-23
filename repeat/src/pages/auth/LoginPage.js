import React from "react";

const LoginPage = props => {
  return (
    <>
      <h2>LoginPage</h2>
      <button
        onClick={() => {
          localStorage.setItem("isAuth", JSON.stringify({ isAuth: true }));
          props.history.push("/");
        }}
      >
        Login Done
      </button>
    </>
  );
};

export default LoginPage;
