import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "./components/form/Form";
import List from "./components/list/List";
import CustomSelect from "./ui/CustomSelect";

class App extends Component {
  state = {
    todos: [],
    choose: "all",
    toggle: false,
    filterTodo: []
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ todos: this.props.tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevState", prevState);
    // console.log("this.state", this.state);
    if (prevState.choose !== this.state.choose) {
      this.setState(prev => ({
        filterTodo: prev.todos.filter(todo => todo.todo === this.state.choose)
      }));
    }
  }

  getValue = value => {
    this.setState(prev => ({
      todos: [value, ...prev.todos]
    }));
  };

  deleteTodo = id => {
    this.setState(prev => {
      return {
        todos: prev.todos.filter(todo => todo.id !== id)
      };
    });
  };

  handleChoose = e => {
    this.setState(prev => {
      if (prev.choose !== e.value) {
        return {
          choose: e.value
        };
      }
    });
  };
  toggleAdd = () => {
    this.setState(prev => ({
      toggle: !prev.toggle
    }));
  };

  handleShowAlltodo = () => {
    this.setState({
      filterTodo: []
    });
  };

  render() {
    const { todos, toggle, filterTodo, choose } = this.state;
    console.log("render App");
    return (
      <>
        <CustomSelect handleChoose={this.handleChoose} value={choose} />
        <button onClick={this.toggleAdd}>ADD</button>
        <button onClick={this.handleShowAlltodo}>ALL</button>

        {toggle && <Form onGetValue={this.getValue} />}
        {todos.length ? (
          <List
            data={filterTodo.length ? filterTodo : todos}
            deleteTodo={this.deleteTodo}
          />
        ) : (
          <h2>wait todos ....</h2>
        )}
      </>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default App;
