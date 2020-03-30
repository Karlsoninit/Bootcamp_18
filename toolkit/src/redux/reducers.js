import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  notes: []
};

export const notes = createReducer(initialState, {
  ADD_NOTES: (state, { payload }) => ({
    ...initialState,
    count: state.count + 1,
    notes: [...state.notes, payload]
  })
});
