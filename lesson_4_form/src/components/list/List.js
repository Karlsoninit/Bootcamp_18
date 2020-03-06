import React from "react";

const List = ({ data, deleteTodo }) => {
  console.log(data);
  return data.map(todo => (
    <li key={todo.id}>
      <h1>{todo.name}</h1>
      <h2>{todo.todo}</h2>
      <p>{todo.description}</p>
      <h3>{todo.date}</h3>
      <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
    </li>
  ));
};

export default List;
