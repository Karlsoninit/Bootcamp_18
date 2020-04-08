import { configureStore, combineReducers } from "@reduxjs/toolkit";

const globalReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT":
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: globalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// const globalReducer = (state = []) => state;

// const rootReducer = combineReducers({
//   products: globalReducer,
// });

// export const store = createStore(rootReducer, devToolsEnhancer());
