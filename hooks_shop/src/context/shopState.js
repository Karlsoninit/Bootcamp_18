import React, { useReducer } from "react";
import { ShopContext } from "./shopContext";
import products from "../products";

const initialState = {
  products: products,
  filterProducts: [],
  cart: [],
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
  addToCart: (state, { payload }) => ({
    ...state,
    cart: [...state.cart, payload],
  }),
  default: (state) => state,
};

const reducer = (state, action) => {
  const handler = handlers[action.type] || handlers.default;
  return handler(state, action);
};

export const ShopState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("availableSizes", state);

  return (
    <ShopContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
