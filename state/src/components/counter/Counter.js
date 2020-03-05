import React, { Component } from "react";

export const showAlert = param => {
  if (param > 50) {
    alert("fddf");
  }
};

class Counter extends Component {
  state = {
    count: 0,
    step: 0,
    flag: true
  };

  handleIncrement = () => {
    const { step } = this.state;
    this.setState(prevstate => {
      return {
        count: prevstate.count + step
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevstate => ({
      count: prevstate.count - this.state.step
    }));
  };

  handleChooseStep = ({ target: { value } }) => {
    this.setState({
      step: Number(value),
      flag: false
    });
  };

  render() {
    const { count, step, flag } = this.state;

    console.log("re-render");
    console.log(count);
    console.log(step);
    return (
      <>
        <>
          <button disabled={flag} onClick={this.handleIncrement}>
            {process.env.REACT_ENV_DECREMENT}
            <span style={{ fontSize: 40 }}> {step}</span>
          </button>
          <button disabled={flag} onClick={this.handleDecrement}>
            DECREMENT
          </button>
        </>

        <h2>{count}</h2>
        <select onChange={this.handleChooseStep}>
          <option>--Please choose an option--</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </>
    );
  }
}

export default Counter;
