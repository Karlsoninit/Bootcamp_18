import { createReducer, combineReducers } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  notes: []
};

export const notes = createReducer(initialState, {
  ADD_NOTES: (state, { payload }) => ({
    ...initialState,
    count: state.count + 1,
    notes: payload
  }),
  UPDATE_NOTES: (state, { payload }) => ({
    ...initialState,
    notes: JSON.parse(localStorage.getItem("server"))
  })
  // USER_LOGOUT: () => initialState
});

const token = createReducer(null, {
  GET_TOKEN: (state, { payload }) => payload.data.user.token,
  USER_LOGOUT: () => null
});

const user = createReducer(null, {
  GET_USER_INFO: (state, { payload }) => payload.data.user,
  USER_LOGOUT: () => null
});

const error = createReducer(null, {});

export const auth = combineReducers({ token, user, error });
