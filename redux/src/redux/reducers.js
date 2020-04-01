import types from "./types";

// export const notes = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_NOTE:
//       return [...state, payload];
//     case types.DELETE_NOTE:
//       return state.filter(note => note.id !== payload);
//     default:
//       return state;
//   }
// };

const tokenGen =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTg0NjA2ODQ1ODIyYjVkM2YyZjQ5ZGUiLCJjcmVhdGVkRGF0ZSI6MTU4NTczMzczNjE2MCwiZXhwIjoxNTg4MzI1NzM2fQ.daIRHxeDC2MVVdd-78AVqymQbzkeTb6hSBsKVuT-j7o";

export const token = (state = tokenGen, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const handlers = {
  [types.ADD_NOTE]: (state, { payload }) => {
    console.log("payload", payload);
    return { ...state, notes: payload };
  },
  [types.DELETE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload),
    filterNotes: state.filterNotes.filter(note => note.id !== payload)
  }),
  [types.FILTER_NOTE]: (state, { payload }) => {
    console.log("inner reducer filter note", payload);

    return {
      ...state,
      filterNotes: state.notes.filter(note => note.note === payload)
    };
  },
  DEFAULT: state => state
};

// export const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER_NOTE:
//       return state.filter(note => note.note === payload);
//     default:
//       return state;
//   }
// };

const initialState = {
  notes: [],
  filterNotes: []
};

export const notes = (state = initialState, actions) => {
  const handler = handlers[actions.type] || handlers.DEFAULT;
  return handler(state, actions);
};
