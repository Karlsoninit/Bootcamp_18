import types from "./types";

export const increment = value => ({
  type: types.INCREMENT,
  payload: value
});

export const decrement = value => ({
  type: types.DECREMENT,
  payload: value
});
