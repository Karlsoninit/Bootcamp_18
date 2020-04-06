import React, { useState, useEffect } from "react";
import products from "./products";
import axios from "axios";
import { MyContext } from "./context/createContext";
import GetData from "./components/GetData";

const initialState = {
  word: "work",
  products: [],
  skill: [],
  news: [],
};

const defaultInputValue = { task: "", description: "" };

const App = () => {
  const [state, setState] = useState(initialState);
  const [tasks, setTasks] = useState(defaultInputValue);

  const handleClick = () => {
    setState({
      ...state,
      word: "param",
      skill: [...state.skill, "ho-ho"],
    });
  };

  useEffect(() => {
    console.log("didMout");
    setState((prev) => ({ ...prev, products }));
  }, [state.skill]);

  const getNews = async () => {
    const data = await axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-06&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
    );
    console.log(data.data.articles);
    setState({
      ...state,
      news: data.data.articles,
    });
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tasks);
    setTasks(defaultInputValue);
  };
  const handleChange = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  return (
    <MyContext.Provider
      value={{
        state,
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="enter your text ..."
          value={tasks.task}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="enter your text ..."
          value={tasks.description}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      <h2>{state.word}</h2>
      <button onClick={handleClick}>click</button>
      <GetData />
    </MyContext.Provider>
  );
};

export default App;
