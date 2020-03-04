import React, { Component } from "react";

class WishList extends Component {
  state = {
    isOpen: false,
    value: "",
    show: false,
    drower: true
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.showWish(this.state.value);
  };

  handleChangeValue = event => {
    // console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  toggle = () => {
    this.setState(prevState => {
      console.log("prevState", prevState);
      return { isOpen: !prevState.isOpen };
    });
    console.log("state", this.state.isOpen);
  };

  render() {
    console.log("re-re-nder");
    console.log(this.props);
    return (
      <>
        <button onClick={this.toggle}>FILTER</button>
        {this.state.isOpen && (
          <form onSubmit={this.handleSubmitForm}>
            <input type="text" onChange={this.handleChangeValue} />
            <button>ADD</button>
          </form>
        )}
      </>
    );
  }
}

export default WishList;
