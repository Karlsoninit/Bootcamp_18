import types from "./types";

export const reducer = (state = 100, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload;
    case types.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
