import { createStore } from "redux";
import { reducer } from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(reducer, devToolsEnhancer());
