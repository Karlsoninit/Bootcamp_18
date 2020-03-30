import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { notes } from "./reducers";

const rootReducer = combineReducers({
  notes
});

export const store = configureStore({
  reducer: rootReducer
});
