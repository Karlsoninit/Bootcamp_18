import { createStore, combineReducers } from "redux";
import { notes, token } from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "notes",
  storage,
  whitelist: ["notes"]
};

const rootReducer = combineReducers({
  notes,
  token
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
