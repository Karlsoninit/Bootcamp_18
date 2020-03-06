import React, { Component } from "react";
import Form from "./components/form/Form";
import List from "./components/list/List";

class App extends Component {
  state = {
    todos: []
  };

  getValue = value => {
    console.log(value);
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

  render() {
    const { todos } = this.state;
    return (
      <>
        <Form onGetValue={this.getValue} />
        {todos.length ? (
          <List data={todos} deleteTodo={this.deleteTodo} />
        ) : (
          <h2>wait todos ....</h2>
        )}
      </>
    );
  }
}

export default App;
