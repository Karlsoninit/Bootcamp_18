import {
  configureStore,
  combineReducers,
  createReducer,
} from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userId: null,
  userPosts: [],
};

const reducer = {
  CURRENT_USER: (state, { payload }) => {
    console.log("reducer --->", payload);
    return {
      ...state,
      userName: payload.userName,
      userId: payload.userId,
      userPosts: payload.userPosts,
    };
  },
  USER_SIGNOUT: () => initialState,
};

const user = createReducer(initialState, reducer);

const rootReducer = combineReducers({
  user,
});

export const store = configureStore({
  reducer: rootReducer,
});
