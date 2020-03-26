import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const reducer = (state = 0) => state;

export const store = createStore(reducer, devToolsEnhancer());
