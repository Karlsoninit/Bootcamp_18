import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { notes, auth } from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  notes,
  auth
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST]
      }
    }),
    thunk
  ]
});

export const persistor = persistStore(store);
