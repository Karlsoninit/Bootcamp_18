import React, { Component } from "react";
import styles from "./hocdrower.module.css";
const withHigherOrderComponent = prevParam => WrappedComponent => {
  console.log("------->", prevParam);

  if (prevParam) {
    return class WithHigherOrderComponent extends Component {
      state = {
        isOpen: false,
        firstName: "",
        lastName: "",
        age: ""
      };

      handleOpen = () => {
        this.setState(prev => ({
          isOpen: !prev.isOpen
        }));
      };

      handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
      };

      handleChangeValue = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      render() {
        const { isOpen } = this.state;
        console.log(this.props);
        return (
          <div>
            <button onClick={this.handleOpen}>OPEN</button>
            {isOpen && (
              <div className={styles.container}>
                <WrappedComponent
                  //   elemTwo={this.props.elemTwo}
                  {...this.props}
                  handleSubmit={this.handleSubmit}
                  handleChangeValue={this.handleChangeValue}
                />
              </div>
            )}
          </div>
        );
      }
    };
  }

  const WithHigherOrderComponent = props => <WrappedComponent {...props} />;
  return WithHigherOrderComponent;
};

export default withHigherOrderComponent;
