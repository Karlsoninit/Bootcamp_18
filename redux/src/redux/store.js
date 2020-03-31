import { createStore, combineReducers, applyMiddleware } from "redux";
import { notes, token } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { logger } from "../middlewares/logger";
import thunk from "redux-thunk";

const persistConfig = {
  key: "notes",
  storage,
  whitelist: ["token"]
};

const middlewares = [thunk];

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  notes,
  token
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
