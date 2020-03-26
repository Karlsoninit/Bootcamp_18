import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";
function App(props) {
  console.log("props", props);
  return (
    <div style={{ width: 300, margin: "auto" }}>
      <button onClick={() => props.increment(5)}>Increment</button>
      <h2>{props.count}</h2>
      <button onClick={() => props.decrement(5)}>Decrement</button>
    </div>
  );
}

const mapSTP = state => {
  console.log(state);
  return {
    count: state
  };
};

// const mapDTP = dispatch => ({
//   plus: sum =>
//     dispatch({
//       type: "INCREMENT",
//       payload: sum
//     }),
//   minus: sum =>
//     dispatch({
//       type: "DECREMENT",
//       payload: sum
//     })
// });

// const mapDTP = {
//   increment,
//   decrement
// };

export default connect(mapSTP, { increment, decrement })(App);

// const connect = (mapStateToProps, mapDispatchToProps) => BaseComponent => {
//   return class Connect extends Component {
//     render() {
//       return <BaseComponent />;
//     }
//   };
// };
