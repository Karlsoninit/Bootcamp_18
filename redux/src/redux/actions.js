import types from "./types";

export const addNotes = notes => {
  return { type: types.ADD_NOTE, payload: notes };
};

export const deleteNote = id => ({
  type: types.DELETE_NOTE,
  payload: id
});
