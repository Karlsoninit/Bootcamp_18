import types from "./types";

export const notes = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_NOTE:
      return [...state, payload];
    case types.DELETE_NOTE:
      return state.filter(note => note.id !== payload);

    default:
      return state;
  }
};

export const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.ADD_NOTE:
      return payload.note;
    default:
      return state;
  }
};
