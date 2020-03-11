import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    wishes: [],
    choose: "wishes"
  };

  componentDidMount() {
    this.getWishes();
  }

  getWishes = async () => {
    const data = await axios.get(
      `https://rn-todo-48cbb.firebaseio.com/wishes/.json`
    );

    let transform = data.data
      ? Object.keys(data.data).map(key => {
          return { ...data.data[key], id: key };
        })
      : [];

    // if (data.data) {
    //   transform = Object.keys(data.data).map(key => {
    //     return { ...data.data[key], id: key };
    //   });
    // } else {
    //   transform = [];
    // }

    this.setState({
      wishes: transform
    });
  };

  putWish = async wish => {
    try {
      await axios.post(
        `https://rn-todo-48cbb.firebaseio.com/${this.state.choose}.json`,
        wish
      );
    } catch (er) {
      console.log(er);
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    await this.putWish({ wish: value });
    this.getWishes();
  };

  deleteWish = async id => {
    try {
      const data = await axios.delete(
        `https://rn-todo-48cbb.firebaseio.com/wishes/${id}.json`
      );
      console.log(data);
      this.getWishes();
    } catch (er) {
      console.log(er);
    }
  };

  render() {
    console.log("render");
    const { wishes } = this.state;
    console.log(wishes);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="wish" />
          <button type="submit">PUSH</button>
        </form>
        <ul>
          {wishes.map(wish => (
            <li key={wish.id}>
              <h2>{wish.wish}</h2>
              <button onClick={() => this.deleteWish(wish.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
