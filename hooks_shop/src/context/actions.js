import types from "./types";

export const addToCart = (card) => ({
  type: types.ADD_TO_CART,
  payload: card,
});
