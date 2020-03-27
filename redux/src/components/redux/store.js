import { createStore, combineReducers } from "redux";
import { notes, token } from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  notes,
  token
});

export const store = createStore(rootReducer, devToolsEnhancer());
