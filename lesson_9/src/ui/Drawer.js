import React from "react";
import withHigherOrderComponent from "./HOCDrower";
const param = true;

const Drawer = props => {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        placeholder="firstName"
        name="firstName"
        onChange={props.handleChangeValue}
      />
      <input
        placeholder="lastName"
        name="lastName"
        onChange={props.handleChangeValue}
      />
      <input placeholder="age" name="age" onChange={props.handleChangeValue} />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default withHigherOrderComponent(param)(Drawer);
