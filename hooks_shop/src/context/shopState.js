import React, { useReducer } from "react";
import { useSelector, connect } from "react-redux";

import { ShopContext } from "./shopContext";

import types from "./types.js";
const initialState = {
  products: [],
  filterProducts: [],
  cart: [],
  quantity: 0,
};

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case "filterSIze":
//       return {
//         ...state,
//         filterProducts: state.products.filter((elem) =>
//           elem.availableSizes.includes(payload)
//         ),
//       };
//     case "addToCart":
//       return { ...state, cart: [...state.cart, payload] };
//     default:
//       return state;
//   }
// }

const handlers = {
  filterSIze: (state, { payload }) => ({
    ...state,
    filterProducts: state.products.filter((elem) =>
      elem.availableSizes.includes(payload)
    ),
  }),
  [types.ADD_TO_CART]: (state, { payload }) => {
    if (state.cart.some((product) => product.id === payload.id)) {
      return {
        ...state,
        cart: [...state.cart],
        quantity: state.quantity + 1,
      };
    }

    return {
      ...state,
      cart: [...state.cart, { ...payload }],
      quantity: state.quantity + 1,
    };
  },

  default: (state) => state,
};

const reducer = (state, action) => {
  const handler = handlers[action.type] || handlers.default;
  return handler(state, action);
};

export const ShopState = (props) => {
  console.log("props", props);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
